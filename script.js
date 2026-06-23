<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>UA Flyer Editor</title>
  <link rel="stylesheet" href="styles.css" />
  <script src="config.js"></script>
  <script src="https://alcdn.msauth.net/browser/2.38.3/js/msal-browser.min.js"></script>
</head>
<body>
  <section id="loginScreen" class="login-screen hidden">
    <div class="login-card">
      <div class="brand-mark">ua</div>
      <h1>Editor de Flyers</h1>
      <p>Ingreso exclusivo para usuarios autorizados de Universal Assistance.</p>
      <button id="loginBtn" class="primary-btn">Ingresar con mail UA</button>
      <p id="loginError" class="error-text"></p>
      <small>Autenticación mediante Microsoft Entra ID.</small>
    </div>
  </section>

  <main id="app" class="hidden">
    <header class="topbar">
      <div class="brand">
        <div class="ua-icon">ua</div>
        <div>
          <strong>universal<br/>assistance</strong>
          <span>A company of Zurich</span>
        </div>
      </div>
      <div class="top-title">Editor de Flyers Comerciales</div>
      <div class="user-box">
        <span id="userEmail"></span>
        <button id="logoutBtn" class="ghost-btn">Salir</button>
      </div>
    </header>

    <nav class="subbar">
      <button id="backBtn" class="ghost-btn">← Volver</button>
      <strong id="templateName">Invitación</strong>
      <span>Seleccioná un campo para editar · Templates cerrados UA</span>
    </nav>

    <section class="workspace">
      <aside class="left-panel">
        <h3>Templates</h3>
        <button class="template-btn active" data-template="invitation">Invitación</button>
        <button class="template-btn" data-template="incentive">Incentivo</button>
        <button class="template-btn" data-template="product">Producto</button>

        <h3>Acciones</h3>
        <button id="exportPngBtn" class="primary-btn">Descargar PNG</button>
        <button id="exportSvgBtn" class="secondary-btn">Descargar SVG</button>
        <button id="resetBtn" class="secondary-btn">Restaurar template</button>

        <div class="note">
          <strong>Idea MVP:</strong> Copilot genera el texto y este editor garantiza la maquetación.
        </div>
      </aside>

      <section class="canvas-zone">
        <div id="flyer" class="flyer invitation">
          <div class="photo-overlay"></div>
          <div class="flyer-logo">ua <span>universal<br/>assistance</span></div>
          <div class="zurich">A company of Zurich</div>
          <div id="fieldSubtitle" class="editable subtitle" contenteditable="true">Te esperamos en</div>
          <div id="fieldTitle" class="editable title" contenteditable="true">Congreso<br/>de Agentes<br/>de Viajes.</div>
          <div class="info-card">
            <div class="info-line"><span>▣</span><div id="fieldDate" class="editable" contenteditable="true">Fecha:<br/>Miércoles 24.06.26</div></div>
            <div class="info-line"><span>◷</span><div id="fieldTime" class="editable" contenteditable="true">Hora:<br/>23:00 hs</div></div>
            <div class="info-line"><span>⌖</span><div id="fieldPlace" class="editable" contenteditable="true">Lugar:<br/>Av. Córdoba 820<br/>CABA</div></div>
          </div>
          <div id="fieldLegal" class="editable legal" contenteditable="true">Válido para agencias participantes. Sujeto a condiciones comerciales vigentes.</div>
          <div id="partnerLogo" class="partner-logo editable" contenteditable="true">logo<br/>partner</div>
        </div>
      </section>

      <aside class="right-panel">
        <h3>Campos editables</h3>

        <label>Subtítulo</label>
        <textarea data-target="fieldSubtitle">Te esperamos en</textarea>
        <div class="controls" data-target="fieldSubtitle"></div>

        <label>Nombre / título</label>
        <textarea data-target="fieldTitle">Congreso&#10;de Agentes&#10;de Viajes.</textarea>
        <div class="controls" data-target="fieldTitle"></div>

        <label>Fecha</label>
        <textarea data-target="fieldDate">Fecha:&#10;Miércoles 24.06.26</textarea>
        <div class="controls" data-target="fieldDate"></div>

        <label>Hora</label>
        <textarea data-target="fieldTime">Hora:&#10;23:00 hs</textarea>
        <div class="controls" data-target="fieldTime"></div>

        <label>Lugar</label>
        <textarea data-target="fieldPlace">Lugar:&#10;Av. Córdoba 820&#10;CABA</textarea>
        <div class="controls" data-target="fieldPlace"></div>

        <label>Legal</label>
        <textarea data-target="fieldLegal">Válido para agencias participantes. Sujeto a condiciones comerciales vigentes.</textarea>
        <div class="controls" data-target="fieldLegal"></div>

        <label>Logo partner / texto corto</label>
        <textarea data-target="partnerLogo">logo&#10;partner</textarea>
        <div class="controls" data-target="partnerLogo"></div>

        <label>Imagen de fondo URL</label>
        <input id="bgInput" type="url" placeholder="https://..." />
        <button id="applyBgBtn" class="secondary-btn">Aplicar fondo</button>
      </aside>
    </section>
  </main>

  <script src="auth.js"></script>
  <script src="script.js"></script>
</body>
</html>
