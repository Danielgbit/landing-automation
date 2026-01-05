# 🚀 Landing & Automatización para Negocios

Sistema web diseñado para vender **landings pages** y **automatizaciones con WhatsApp**
a pequeñas empresas (peluquerías, centros de estética, consultorios, etc.).

El proyecto demuestra diferentes niveles de madurez digital:
desde una landing simple hasta un sistema automatizado con WhatsApp e IA.

---

## 🎯 Objetivo del proyecto

- Vender landings profesionales como producto de entrada
- Ofrecer automatización con WhatsApp como producto principal (mensualidad)
- Demostrar valor real mediante demos funcionales
- Mantener costos bajos y arquitectura simple

---

## 🧠 Enfoque del producto

No se vende tecnología.
Se vende **más clientes + menos tiempo respondiendo WhatsApp**.

---

## 🧱 Stack tecnológico

- **Frontend:** Next.js (App Router, `src/app`)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Backend:** API Routes de Next.js
- **Base de datos:** Supabase (solo para demos avanzadas)
- **Automatización:** n8n
- **WhatsApp:** Baileys (API externa reutilizada)
- **IA:** Endpoint propio en Next.js (optimizado para bajo costo)

---

## 🧩 Demos incluidas

### 1️⃣ Landing Simple
Producto de entrada ($300.000 COP)

- Landing one-page
- Servicios
- Formulario simple
- Envío directo a WhatsApp

Ruta:

/demo/landing-simple


---

### 2️⃣ Consulta de Servicios
Reduce preguntas repetidas.

- Servicios
- Precios
- CTA a WhatsApp

Ruta:


/demo/servicios


---

### 3️⃣ Reservas por Web
Demostración de automatización real.

- Formulario de reservas
- Supabase (guardar citas)
- n8n (orquestación)
- Confirmación por WhatsApp

Ruta:


/demo/reservas


---

### 4️⃣ WhatsApp Automático con IA
Atención 24/7 simulando un negocio real.

- Respuestas automáticas
- Consulta de servicios
- Inicio de agendamiento
- IA controlada vía API Route

Acceso:
Botón desde la Home

---

## 📁 Estructura del proyecto



src/
├─ app/
│ ├─ page.tsx # Home (marketing)
│ ├─ demo/
│ │ ├─ landing-simple/
│ │ ├─ servicios/
│ │ └─ reservas/
│ ├─ api/
│ │ ├─ ai/
│ │ ├─ reservations/
│ └─ admin/ # Futuro
│
├─ lib/
│ ├─ supabase.ts
│ ├─ whatsapp.ts
│
├─ services/ # Integraciones externas
├─ types/


```
🔄 Flujo general del sistema
Usuario → Landing → Acción (formulario / demo)
        → API Next.js
        → Supabase (si aplica)
        → n8n
        → WhatsApp (Baileys)

🧠 Reglas del proyecto

El código está comentado en español

Nombres de variables y funciones en inglés

La lógica vive en API / lib, no en las páginas

La IA solo responde usando contexto controlado

n8n es orquestador, no cerebro

Supabase se usa solo donde aporta valor

Ver archivo:

.antigravity-rules.md

🚧 Estado del proyecto

 Home que vende

 Demo Landing Simple

 Demo Servicios

 Demo Reservas

 WhatsApp con IA

 Panel Admin (futuro)