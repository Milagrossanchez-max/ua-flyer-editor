# Notas para IT - Seguridad y aprobacion

## Objetivo
Publicar un editor interno de flyers con templates UA y acceso exclusivo a usuarios autorizados.

## Requisito de seguridad
No usar login casero. La autenticacion debe hacerse con Microsoft Entra ID.

## Recomendacion de publicacion
Preferida:
- GitHub Enterprise como repositorio de codigo
- Deploy a Azure Static Web Apps
- Autenticacion con Microsoft Entra ID
- Restriccion por grupo de seguridad: `UA - Editor Flyers - Usuarios`

Alternativa:
- GitHub Enterprise Cloud Pages privado con SSO corporativo
- Acceso solo a miembros autorizados del repositorio/organizacion

No recomendado:
- GitHub Pages publico con login en JavaScript para contenido sensible

## App Registration
Crear una App Registration SPA en Microsoft Entra ID:
- Redirect URI: URL final de la app
- Supported account types: Single tenant
- API permissions: openid, profile, email, User.Read
- Assignment required: Yes
- Asignar grupo autorizado

## Endurecimiento recomendado
- Forzar HTTPS
- Revisar Content Security Policy
- Evitar cargar assets confidenciales si el hosting es publico
- No guardar datos sensibles en localStorage
- Auditar cambios de repo con branch protection y PR reviews
