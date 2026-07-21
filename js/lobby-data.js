// =====================================================
// CHEATGUYS! - Datos compartidos del lobby
// =====================================================
(function () {
    "use strict";

    const characters = {
        akane: {
            name: "AKANE HOSHIZORA",
            role: "Fundadora, Vocalista Principal y Guitarra Rítmica (Lvl. 15)",
            desc: "<div class='char-stat-grid'><span>COLOR: VIOLETA</span><span>APODO: LA DEMONIO DEL ARCADE</span><span>BUILD: HUD_SOCIAL_JRPG</span></div><p><strong>Akane no quería ser protagonista de nada.</strong> Es introvertida, silenciosa y socialmente torpe; su ansiedad convierte cualquier interacción en un menú de opciones tipo videojuego, con consecuencias que su cerebro exagera al 300%.</p><p>Detrás de su expresión neutral vive una mente brillante, observadora y creativa. Se estresa por pedir salsa extra, pero puede cantar en un escenario si alguien importante la necesita. No busca liderar: la banda simplemente empieza a girar alrededor de ella mientras intenta pasar desapercibida.</p><ul class='char-lore-list'><li>Canta con una profundidad enorme cuando se siente segura.</li><li>Toca guitarra rítmica con precisión emocional.</li><li>Tiene los puntajes más altos del arcade del colegio bajo seudónimo.</li><li>Su lugar seguro es el garaje convertido en cuartel de la banda.</li></ul>",
            color: "var(--akane-color)",
            imgUrl: "assets/characters/cards/ficha-akane.webp"
        },
        rika: {
            name: "RIKA TANAKA",
            role: "Guitarra Principal, Compositora y Musicalización (Lvl. 16)",
            desc: "<div class='char-stat-grid'><span>COLOR: NARANJA</span><span>APODOS: MANDARINA / TERROR TANAKA</span><span>BUILD: VOLUME_MAX</span></div><p><strong>Rika es una bomba emocional con guitarra.</strong> Extrovertida, intensa, impulsiva y profundamente pasional; vive en volumen alto y no tiene filtro, ni ganas de conseguir uno.</p><p>Su caos viene con talento real: toca de oído, improvisa riffs únicos y arrastra a la gente a sus ideas aunque tengan la estabilidad de una mesa con tres patas. Con Akane funciona como escudo, motor y guitarra gemela: si el mundo grita demasiado, Rika grita más fuerte primero.</p><ul class='char-lore-list'><li>Virtuosa de la guitarra eléctrica e instinto escénico natural.</li><li>Compone desde la emoción pura, sin pedir permiso.</li><li>Admira a Kaede Ayase y teme no estar a la altura.</li><li>Su ropa cambia según su estado de ánimo.</li></ul>",
            color: "var(--rika-color)",
            imgUrl: "assets/characters/cards/ficha-rika.webp"
        },
        momo: {
            name: "MOMO FUJIWARA",
            role: "Bajista, Encargada Estética y Corista (Lvl. 15)",
            desc: "<div class='char-stat-grid'><span>COLOR: ROSA MEXICANO</span><span>APODO: PULGA</span><span>BUILD: SOFT_BASS_HEALER</span></div><p><strong>Momo es el corazón dulce y risueño de CheatGuys!.</strong> Pequeña, estética y con alma de algodón de azúcar, vive entre colores, accesorios, ideas bonitas y distracciones que llegan sin avisar.</p><p>Puede parecer perdida, pero lee emociones con una precisión que nadie le enseñó. Su bajo no busca aplastar la canción: la abraza. Es la primera en dar apoyo, llorar con alguien o decir “yo te creo” aunque no sepa de qué están hablando.</p><ul class='char-lore-list'><li>Su bajo se llama Sina y a veces le pide consejos.</li><li>Tiene oído armónico y detecta disonancias con facilidad.</li><li>Convierte el caos de la banda en algo visualmente abrazable.</li><li>Calma a Jun y reconforta a Akane casi sin intentarlo.</li></ul>",
            color: "var(--momo-color)",
            imgUrl: "assets/characters/cards/ficha-momo.webp"
        },
        jun: {
            name: "JUNPEI SAKAMOTO",
            role: "Baterista y Percusionista (Lvl. 16)",
            desc: "<div class='char-stat-grid'><span>COLOR: CIAN</span><span>APODO: MONJE DEL RAMEN</span><span>BUILD: LUCKY_SLEEP_MODE</span></div><p><strong>Jun es el rey del desgane carismático.</strong> Relajado, sarcástico y con vibra de “todo saldrá bien... probablemente”, evita cualquier cosa que huela a responsabilidad, pero su talento musical roza lo absurdo.</p><p>Cuida a sus amigos desde la esquina, con comentarios secos y una calma casi mística. Parece operar en ahorro de energía, hasta que la banda realmente lo necesita y aparece el baterista preciso, intuitivo y sospechosamente afortunado.</p><ul class='char-lore-list'><li>Escucha una canción una vez y suele recordarla.</li><li>Tiene ritmo natural incluso caminando.</li><li>Protege al grupo desde su rincón favorito, casi sin levantarse.</li><li>Siempre trae un snack misterioso en la mochila.</li></ul>",
            color: "var(--jun-color)",
            imgUrl: "assets/characters/cards/ficha-jun.webp"
        },
        hoshi: {
            name: "HOSHI HIMURA",
            role: "Rival escolar de Akane y figura clave de su pasado (Lvl. 15)",
            desc: "<div class='char-stat-grid'><span>EDAD: 15 AÑOS</span><span>COLOR: ROJO</span><span>APODO: PIÑA</span></div><p><strong>Hoshi es popular, competitiva y musicalmente brillante.</strong> Fue criada por su madre, la productora Kaoru Himura, para destacar desde pequeña y representar la excelencia de su familia. Está acostumbrada a recibir admiración y a medir su valor a través del talento, la disciplina y la superioridad.</p><p>En la escuela suele hablar de Akane con desprecio y llamarla “la rarita”, “el fantasma” o “la que no habla”. No la persigue activamente, pero cuando coinciden sabe exactamente cómo incomodarla, aprovechándose de que Akane rara vez responde.</p><p>Sin embargo, su actitud no nace de una simple rivalidad escolar. Hoshi conoció a Akane durante su infancia y recuerda una amistad que Akane ha bloqueado casi por completo. Para Akane, Hoshi es una chica popular que parece odiarla sin razón. Para Hoshi, Akane es una parte de su pasado que nunca logró abandonar.</p><p>Hoshi funciona como el espejo opuesto de Akane: donde una teme ser vista, la otra necesita ser admirada; donde Akane busca vínculos seguros, Hoshi aprendió a tratar las relaciones como jerarquías.</p><p><strong>¿Qué ocurrió entre ellas para que una lo recuerde todo y la otra no recuerde casi nada?</strong></p>",
            color: "#ff003c",
            imgUrl: "assets/characters/cards/ficha-hoshi.webp",
            lockedMemory: true
        }
    };

    const secrets = [
        { id: 1, name: "DISEÑOS_BETA_NEO_TENO.jpg", url: "assets/secrets/secret-beta-neoteno.webp", desc: "<strong>[ ARCHIVO 001 ]</strong> <em>Jun dejó una nota:</em> “wow, nuestras versiones beta tenían menos estabilidad emocional que la banda actual... y eso ya es decir bastante. igual momo se ve como si viniera a salvar el día con stickers.”" },
        { id: 2, name: "AKANE_PROTO_V1.jpg", url: "assets/secrets/secret-akane-proto.webp", desc: "<strong>[ ARCHIVO 002 ]</strong> <em>Akane dejó una nota:</em> “e-esto no cuenta como evidencia oficial... era una versión temprana de mi build. todavía no tenía HUD social, pero la ansiedad ya venía preinstalada.”" },
        { id: 3, name: "DESCARTADO_NAVIDAD.png", url: "assets/secrets/secret-descartado-navidad.webp", desc: "<strong>[ ARCHIVO 003 ]</strong> <em>Momo dejó una nota:</em> “Akane dijo que poner la estrella era una misión de bajo riesgo. luego estuvo diez minutos calculando si el árbol la estaba juzgando. se veía preciosa igual.”" },
        { id: 4, name: "AKANE_SYSTEM_CRASH.jpg", url: "assets/secrets/secret-akane-crash.webp", desc: "<strong>[ ARCHIVO 004 ]</strong> <em>Rika dejó una nota:</em> “si ves a Akane así, bajas la voz, das dos pasos atrás y nadie respira raro. protocolo simple. momo se congeló, jun fingió calma y yo ya estaba lista para pelearme con el ambiente.”" },
        { id: 5, name: "SKIN_DIVA_VIRTUAL.png", url: "assets/secrets/secret-diva-virtual.webp", desc: "<strong>[ ARCHIVO 005 ]</strong> <em>Rika dejó una nota:</em> “Akane niega que esta skin le quede brutal porque le da pena existir en alta resolución. mentira. parece jefa secreta de rhythm game y pienso defender esa verdad a guitarrazos.”" },
        { id: 6, name: "PROTO_MECHA_VINTAGE.png", url: "assets/secrets/secret-mecha-vintage.webp", desc: "<strong>[ ARCHIVO 006 ]</strong> <em>Jun dejó una nota:</em> “akane vestida de Corin Wickes con una motosierra. kenji dijo que era investigación visual, rika dijo que era peligroso darle ideas y yo sólo quiero saber quién autorizó el presupuesto de sierras.”" },
        { id: 7, name: "ADEFECIA_4AM.jpg", url: "assets/secrets/secret-adefesia-4am.webp", desc: "<strong>[ ARCHIVO 007 ]</strong> <em>Jun dejó una nota:</em> “calidad visual cuestionable, actitud impecable. momo parece guardaespaldas de una Akane tamaño llavero. no sé qué pasó aquí, pero claramente pasó después de medianoche.”" },
        { id: 8, name: "VISION_FUTURO.png", url: "assets/secrets/secret-vision-futuro.webp", desc: "<strong>[ ARCHIVO 008 ]</strong> <em>Rika dejó una nota:</em> “KENJI TAKEDA, EXPLÍCATE. Akane entró en error crítico, Momo hizo ruiditos de emoción y yo sigo decidiendo si esto es tierno o si tengo que interrogarte bajo una lámpara.”" },
        { id: 9, name: "NEO_TENO_KIMONOS.jpg", url: "assets/secrets/NEO_TENO_KIMONOS.webp", desc: "<strong>[ ARCHIVO 009 ]</strong> <em>Momo dejó una nota:</em> “Sina dice que los kimonos están aprobados con brillitos. Akane usó el abanico como escudo anti-contacto-visual, pero se veía tan bonita que casi se nos reinicia el corazón.”" },
        { id: 10, name: "RIKA_ATTACK_PROTECT.jpg", url: "assets/secrets/RIKA_ATTACK_PROTECT.webp", desc: "<strong>[ ARCHIVO 010 ]</strong> <em>Jun dejó una nota:</em> “rika activó modo firewall, akane se volvió carpeta comprimida y momo descubrió el miedo escénico sin escenario. un recreo normal en el jacarandas, supongo.”" },
        { id: 11, name: "AKANE_TRUCK_ISEKAI.jpg", url: "assets/secrets/AKANE_TRUCK_ISEKAI.webp", desc: "<strong>[ ARCHIVO 011 ]</strong> <em>Jun dejó una nota:</em> “akane contra el transporte público: arco no recomendado. si esto termina siendo canon, yo niego haber estado despierto cuando lo aprobaron.”" },
        { id: 12, name: "CHEATGUYS_ARCADE_LOBBY.jpg", url: "assets/arcade/CHEATGUYS_ARCADE_LOBBY.webp", desc: "<strong>[ ARCHIVO 012 ]</strong> <em>Akane dejó una nota:</em> “el arcade es zona segura... en teoría. luego Rika gritó, Momo encontró algo adorable en una máquina rota y Jun se subió a dormir encima del gabinete. party balanceada.”" },
        { id: 13, name: "STAGE_ANXIETY_SPOTLIGHT.jpg", url: "assets/secrets/STAGE_ANXIETY_SPOTLIGHT.webp", desc: "<strong>[ ARCHIVO 013 ]</strong> <em>Akane dejó una nota:</em> “alerta: reflector detectado. opciones disponibles: tocar la guitarra, salir corriendo, fingir que soy un mueble. Rika dijo que eligiera la primera. mi HUD todavía no le perdona.”" },
        { id: 14, name: "AKANE_SOLO_GUITAR.jpg", url: "assets/secrets/AKANE_SOLO_GUITAR.webp", desc: "<strong>[ ARCHIVO 014 ]</strong> <em>Momo dejó una nota:</em> “ese día Akane tocó como si el mundo bajara el volumen para escucharla. ella dice que sólo sobrevivió al momento, pero nosotras sabemos que brilló.”" },
        { id: 15, name: "RIKA_EXTRACTION_PROTOCOL.png", url: "assets/secrets/rika_extraction_protocol.webp", desc: "<strong>[ ARCHIVO 015 ]</strong> <em>Jun dejó una nota:</em> “rika llamó a esto ‘rescate táctico’. akane lo llamó ‘evento traumático con desplazamiento horizontal’. yo sólo veo que alguien activó el modo agarrar-y-correr sin tutorial.”" },
        { id: 16, name: "AKANE_EMOTE_OVERFLOW.png", url: "assets/secrets/akane_emote_overflow.webp", desc: "<strong>[ ARCHIVO 016 ]</strong> <em>Momo dejó una nota:</em> “Akane dice que esto no es una hoja de expresiones, que son ‘fallos documentados del sistema emocional’. Sina y yo creemos que son stickers perfectos, pero se lo diremos bajito para que no se reinicie.”" },
        { id: 17, name: "RIKA_JUN_RECONCILIATION_SHIRT.png", url: "assets/secrets/rika_jun_reconciliation_shirt.webp", desc: "<strong>[ ARCHIVO 017 ]</strong> <em>Momo dejó una nota:</em> “yo sólo quería que Rika y Jun practicaran convivencia saludable. duraron ocho segundos sin discutir, que según Sina cuenta como milagro pequeñito. la camisa no sobrevivió al ensayo.”" },
        { id: 18, name: "MITSUKI_CAFFEINE_OVERRIDE.png", url: "assets/secrets/mitsuki_caffeine_override.webp", desc: "<strong>[ ARCHIVO 018 ]</strong> <em>Mitsuki dejó una nota:</em> “Esto no es una crisis, solo es optimización de energía. no sé quién tomó la foto, pero Tanaka se va reprobada por pura sospecha.”" },
        { id: 19, name: "PUBLIC_GIG_BUSTED.png", url: "assets/secrets/busted.webp", desc: "<strong>[ ARCHIVO 019 ]</strong> <em>Akane dejó una nota:</em> “r-recuerdo muy bien que todo esto fue culpa de Rika. ella propuso tocar en un lugar público sin licencia y ahora tengo expediente criminal a los 15 años. mi HUD social todavía muestra BUSCADA NIVEL 1.”" },
        { id: 20, name: "PIÑA_HOSHI.png", url: "assets/secrets/pina_hoshi.png", locked: true, desc: "<strong>[ ARCHIVO 020 ]</strong> <em>Rika dejó una nota:</em> “yo sólo dije que parecía piña porque parecía piña. no dije que alguien la dibujara llorando dentro de una. si Hoshi encuentra esto, yo no estuve aquí... pero sí me reí.”" },
        { id: 21, name: "TETO_HOSHI.png", url: "assets/secrets/teto_hoshi.png", locked: true, desc: "<strong>[ ARCHIVO 021 ]</strong> <em>Jun dejó una nota:</em> “hoshi en modo teto tiene demasiada energía de jefa final de karaoke. rika dijo que le quedaba bien y luego fingió que no había dicho nada. momento histórico, supongo.”" }
    ];

    window.CG = window.CG || {};
    window.CG.lobbyData = Object.freeze({
        characters: Object.freeze(characters),
        secrets: Object.freeze(secrets)
    });
    window.CGLobbyData = window.CG.lobbyData;
})();
