---
name: Skill Creator
description: Use esta skill para generar nuevas skills de Antigravity de manera estructurada. Esta skill guía al agente en la creación de carpetas, archivos SKILL.md con frontmatter correcto y scripts de soporte opcionales.
---

# Instrucciones para el Agente

Cuando se solicite crear una nueva skill, siga estos pasos estrictamente:

## 1. Definición y Alcance
- Pregunte al usuario (si no está claro) el nombre y el propósito de la nueva skill.
- Asegúrese de que la skill sea **atómica** (que haga una sola cosa bien).

## 2. Estructura de Archivos
Cree la siguiente estructura en `.agent/skills/` (o en una ruta especificada por el usuario):
- `.agent/skills/<nombre-skill>/SKILL.md` (Obligatorio)
- `.agent/skills/<nombre-skill>/scripts/` (Opcional, para lógica compleja)
- `.agent/skills/<nombre-skill>/resources/` (Opcional, para plantillas o datos)

## 3. Formato del archivo `SKILL.md`
El archivo debe comenzar siempre con el frontmatter:
```markdown
---
name: [Nombre legible de la skill]
description: [Descripción técnica que indique activadores y funciones específicas]
---
# Instrucciones
[Directrices detalladas en español para el agente]
```

## 4. Mejores Prácticas
- **Idioma**: Las instrucciones dentro de `SKILL.md` deben estar en **Español** (según las reglas globales del proyecto), pero los metadatos `name` y `description` en el frontmatter pueden estar en inglés para compatibilidad con el motor de búsqueda del agente si es necesario (o en español si es para uso interno).
- **Scripts**: Si se incluyen scripts, documente cómo ejecutarlos (ej: `python scripts/main.py --help`).

## 5. Validación final
- Verifique que la descripción de la nueva skill sea lo suficientemente específica para que el motor de Antigravity la active correctamente en el futuro.
