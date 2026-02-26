import os
import sys

def validate_skill(skill_path):
    skill_md = os.path.join(skill_path, 'SKILL.md')
    if not os.path.exists(skill_md):
        print(f"Error: No se encontró SKILL.md en {skill_path}")
        return False
    
    with open(skill_md, 'r', encoding='utf-8') as f:
        content = f.read()
        if not content.startswith('---'):
            print("Error: SKILL.md debe empezar con frontmatter (---)")
            return False
            
    print(f"Skill en {skill_path} validada correctamente.")
    return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python validator.py <ruta_a_la_skill>")
    else:
        validate_skill(sys.argv[1])
