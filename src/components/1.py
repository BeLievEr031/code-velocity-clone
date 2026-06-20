import re
import sys

def camel_case(name):
    if name.startswith('--'):
        return f"'{name}'"
    parts = name.split('-')
    return parts[0] + ''.join(x.title() for x in parts[1:])

def parse_style_string(style_str):
    # We need to split by semicolons, but ignore semicolons inside parentheses (like in rgb(...) or url(...))
    style_str = style_str.replace('&quot;', '"').replace('&apos;', "'")
    rules = []
    current_rule = []
    paren_depth = 0
    in_single_quote = False
    in_double_quote = False
    
    i = 0
    while i < len(style_str):
        char = style_str[i]
        if char == '(' and not in_single_quote and not in_double_quote:
            paren_depth += 1
        elif char == ')' and not in_single_quote and not in_double_quote:
            paren_depth -= 1
        elif char == "'" and not in_double_quote:
            in_single_quote = not in_single_quote
        elif char == '"' and not in_single_quote:
            in_double_quote = not in_double_quote
        
        if char == ';' and paren_depth == 0 and not in_single_quote and not in_double_quote:
            rules.append(''.join(current_rule))
            current_rule = []
        else:
            current_rule.append(char)
        i += 1
    if current_rule:
        rules.append(''.join(current_rule))
        
    style_obj_parts = []
    for rule in rules:
        rule = rule.strip()
        if not rule:
            continue
        if ':' not in rule:
            continue
        key, val = rule.split(':', 1)
        key = key.strip()
        val = val.strip()
        
        # Convert key to camelCase
        cc_key = camel_case(key)
        
        # Check if value is numeric
        # Handle decimal numbers and simple integers, but not if they have units like px, em, %, etc.
        is_num = False
        try:
            float(val)
            is_num = True
        except ValueError:
            pass
            
        if is_num:
            style_obj_parts.append(f"{cc_key}: {val}")
        else:
            # Escape quotes if necessary
            # Clean up redundant double quotes if value has them
            if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
                val = val[1:-1]
            escaped_val = val.replace('"', '\\"')
            style_obj_parts.append(f'{cc_key}: "{escaped_val}"')
            
    return "{{ " + ", ".join(style_obj_parts) + " }}"

def fix_jsx_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace HTML comments <!-- -->
    content = content.replace('<!-- -->', '')
    content = content.replace('<!---->', '')
    
    # State machine or regex to find style="..."
    # Since style="..." can be multiline and have quotes inside, we will find `style="` and then look for the closing double quote that matches it.
    output = []
    i = 0
    n = len(content)
    
    while i < n:
        if content[i:i+7] == 'style="':
            # Found a style attribute!
            start_style = i
            i += 7
            val_chars = []
            # Find the closing double quote
            # We must be careful: style="... &quot; ... " - wait, &quot; is not an actual quote character in the file.
            # Are there actual unescaped nested double quotes in the style="..." attribute?
            # Let's check: style="font-family: &quot;JetBrains Mono&quot;, monospace" - here, they are HTML entities, not actual double quotes.
            # What about style="background-image: url(...)"?
            # So a simple scan for the next double quote should work, unless it's escaped in some other way.
            while i < n and content[i] != '"':
                val_chars.append(content[i])
                i += 1
            
            if i < n and content[i] == '"':
                # We have the style string!
                style_str = ''.join(val_chars)
                # Convert it
                style_jsx = f'style={parse_style_string(style_str)}'
                output.append(style_jsx)
                i += 1 # Skip closing quote
            else:
                # Malformed style or EOF
                output.append(content[start_style:i])
        else:
            output.append(content[i])
            i += 1
            
    fixed_content = ''.join(output)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    print("Done fixing style attributes!")

if __name__ == '__main__':
    if len(sys.argv) > 1:
        fix_jsx_file(sys.argv[1])
    else:
        print("Usage: python fix_styles.py <path_to_tsx>")
