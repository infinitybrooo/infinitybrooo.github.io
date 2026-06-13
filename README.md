<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CheatGuys! - Multiplayer Lobby</title>
    <!-- Importing fonts for that JRPG and 2000s Anime vibe -->
    <link href="https://fonts.googleapis.com/css2?family=VT323&family=Nunito:wght@700;900&display=swap" rel="stylesheet">
    
    <style>
        /* =========================================
           VARIABLES (AKANE'S MENTAL HUD)
           ========================================= */
        :root {
            --akane-color: #8A2BE2;
            --rika-color: #FF4500;
            --momo-color: #FF69B4;
            --jun-color: #00BFFF;
            --bg-color: #0a0a0c;
            --spotify-color: #1DB954;
            --yt-color: #FF0000;
            --patreon-color: #FF424D;
            --kofi-color: #13C3FF;
            --paypal-color: #00457C;
            --whatsapp-color: #25D366;
            --discord-color: #5865F2;
            --gold-color: #FFD700;
        }

        /* =========================================
           RETRO BACKGROUND & CRT SCANLINES
           ========================================= */
        body {
            background-color: #1a0033;
            background-image: 
                linear-gradient(rgba(138, 43, 226, 0.15) 3px, transparent 3px),
                linear-gradient(90deg, rgba(138, 43, 226, 0.15) 3px, transparent 3px),
                linear-gradient(to bottom,
                    #05000a 0%, #05000a 20%,
                    #0e001c 20%, #0e001c 40%,
                    #17002e 40%, #17002e 60%,
                    #1f0040 60%, #1f0040 80%,
                    #280052 80%, #280052 100%
                );
            background-size: 24px 24px, 24px 24px, 100% 100%;
            background-attachment: fixed;
            color: #ffffff;
            font-family: 'Nunito', sans-serif;
            text-align: center;
            padding: 40px 20px;
            margin: 0;
            overflow-x: hidden;
        }

        /* CRT Scanline Overlay (Invisible to clicks) */
        body::after {
            content: " ";
            display: block;
            position: fixed;
            top: 0; left: 0; bottom: 0; right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
            background-size: 100% 4px;
            z-index: 999;
            pointer-events: none;
        }

        /* =========================================
           HEADER & EASTER EGG
           ========================================= */
        .profile-container {
            margin-bottom: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 10;
        }

        .easter-egg-link {
            text-decoration: none;
            outline: none;
            -webkit-tap-highlight-color: transparent;
        }

        .main-logo {
            width: 100%;
            max-width: 340px; 
            height: auto;
            /* Hard pixel-like shadow */
            filter: drop-shadow(6px 6px 0px rgba(0, 0, 0, 0.9));
            transition: transform 0.2s steps(4);
            margin-bottom: 10px;
            cursor: pointer;
        }

        .main-logo:hover {
            transform: scale(1.05) rotate(-2deg);
        }

        p.subtitle {
            font-family: 'VT323', monospace;
            color: #d3d3d3;
            font-size: 24px;
            margin-top: 5px;
            letter-spacing: 2px;
            text-transform: uppercase;
            background-color: rgba(0,0,0,0.6);
            padding: 5px 15px;
            border: 2px solid #fff;
            box-shadow: 4px 4px 0px rgba(0,0,0,0.8);
        }

        /* =========================================
           JRPG MENU BOXES (SECTIONS)
           ========================================= */
        .links-container {
            display: flex;
            flex-direction: column;
            gap: 30px; /* Space between different menu boxes */
            max-width: 450px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }

        .menu-box {
            background-color: rgba(10, 5, 20, 0.85);
            border: 3px solid #ffffff;
            border-radius: 0px; /* Square edges for retro feel */
            padding: 20px;
            box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.8); /* Hard block shadow */
            display: flex;
            flex-direction: column;
            gap: 15px;
            position: relative;
        }

        /* Color Coding the top border for each section */
        .box-main    { border-top: 6px solid var(--akane-color); }
        .box-stickers{ border-top: 6px solid var(--whatsapp-color); }
        .box-support { border-top: 6px solid var(--gold-color); }
        .box-music   { border-top: 6px solid var(--momo-color); }
        .box-contact { border-top: 6px solid var(--jun-color); }

        /* JRPG Style Section Titles */
        .section-title {
            font-family: 'VT323', monospace;
            font-size: 26px;
            color: #fff;
            margin-top: 0;
            margin-bottom: 10px;
            text-align: left;
            text-transform: uppercase;
            border-bottom: 2px dashed rgba(255,255,255,0.3);
            padding-bottom: 5px;
        }

        /* Blinking Cursor for Text Boxes */
        .cursor-blink {
            animation: blinker 1s cubic-bezier(1, 0, 0, 1) infinite;
        }
        @keyframes blinker { 50% { opacity: 0; } }

        /* =========================================
           RETRO BUTTONS (HARD SHADOWS & BORDERS)
           ========================================= */
        .link-btn {
            display: flex;
            align-items: center;
            padding: 14px 18px;
            text-decoration: none;
            color: #ffffff;
            font-size: 16px;
            font-weight: 900;
            background-color: #1a1a1a;
            border: 2px solid #555;
            transition: all 0.1s; /* Faster, stiffer transition */
            position: relative;
            text-align: left;
            box-shadow: 4px 4px 0px rgba(0,0,0,0.6);
        }

        .link-btn:active {
            transform: translate(4px, 4px);
            box-shadow: 0px 0px 0px rgba(0,0,0,0);
        }

        .icon {
            font-size: 26px;
            margin-right: 15px;
            filter: drop-shadow(2px 2px 0px rgba(0,0,0,0.5));
        }

        .text-container { display: flex; flex-direction: column; }
        .btn-title { font-size: 16px; font-weight: 900; line-height: 1.2; }
        .btn-subtitle { font-size: 12px; color: #bbbbbb; font-weight: 700; margin-top: 3px; font-family: 'VT323', monospace; letter-spacing: 1px; }

        /* Hover Effects - Solid Retro Colors */
        .btn-pitch:hover { border-color: #fff; background-color: #333; box-shadow: -4px 4px 0px var(--akane-color); transform: translate(4px, -4px); }
        .btn-x:hover { border-color: #fff; background-color: #333; box-shadow: -4px 4px 0px #fff; transform: translate(4px, -4px); }
        .btn-tiktok:hover { border-color: #fff; background-color: #333; box-shadow: -4px 4px 0px #00f2fe; transform: translate(4px, -4px); }
        
        .btn-whatsapp:hover { border-color: #fff; background-color: #113322; box-shadow: -4px 4px 0px var(--whatsapp-color); transform: translate(4px, -4px); }
        .btn-discord:hover { border-color: #fff; background-color: #222244; box-shadow: -4px 4px 0px var(--discord-color); transform: translate(4px, -4px); }
        
        .btn-patreon:hover { border-color: #fff; background-color: #441111; box-shadow: -4px 4px 0px var(--patreon-color); transform: translate(4px, -4px); }
        .btn-kofi:hover { border-color: #fff; background-color: #113344; box-shadow: -4px 4px 0px var(--kofi-color); transform: translate(4px, -4px); }
        .btn-paypal:hover { border-color: #fff; background-color: #112244; box-shadow: -4px 4px 0px var(--paypal-color); transform: translate(4px, -4px); }

        .btn-mail:hover { border-color: #fff; background-color: #443311; box-shadow: -4px 4px 0px var(--mail-color); transform: translate(4px, -4px); }

        /* =========================================
           MUSIC CARDS (RETRO TINTED BASE)
           ========================================= */
        .music-card {
            display: flex;
            flex-direction: column;
            padding: 14px 18px;
            border: 2px solid #555;
            box-shadow: 4px 4px 0px rgba(0,0,0,0.6);
            transition: all 0.1s;
        }

        .card-akane { background-color: rgba(138, 43, 226, 0.15); }
        .card-akane:hover { border-color: #fff; background-color: rgba(138, 43, 226, 0.3); box-shadow: -4px 4px 0px var(--akane-color); transform: translate(4px, -4px); }

        .card-rika { background-color: rgba(255, 69, 0, 0.15); }
        .card-rika:hover { border-color: #fff; background-color: rgba(255, 69, 0, 0.3); box-shadow: -4px 4px 0px var(--rika-color); transform: translate(4px, -4px); }

        .card-momo { background-color: rgba(255, 105, 180, 0.15); }
        .card-momo:hover { border-color: #fff; background-color: rgba(255, 105, 180, 0.3); box-shadow: -4px 4px 0px var(--momo-color); transform: translate(4px, -4px); }

        .card-jun { background-color: rgba(0, 191, 255, 0.15); }
        .card-jun:hover { border-color: #fff; background-color: rgba(0, 191, 255, 0.3); box-shadow: -4px 4px 0px var(--jun-color); transform: translate(4px, -4px); }

        .card-header { display: flex; align-items: center; margin-bottom: 12px; text-align: left; }
        .platform-links { display: flex; gap: 10px; width: 100%; }

        /* Retro Spotify/YT Buttons */
        .plat-btn {
            flex: 1;
            padding: 6px 0;
            text-decoration: none;
            font-weight: 900;
            font-size: 13px;
            text-align: center;
            border: 2px solid rgba(255,255,255,0.2);
            color: #ccc;
            background-color: rgba(0,0,0,0.5);
            transition: 0.1s;
        }

        .yt-btn:hover { border-color: #fff; background-color: var(--yt-color); color: #fff; }
        .sp-btn:hover { border-color: #fff; background-color: var(--spotify-color); color: #fff; }

        /* Footer */
        .footer {
            margin-top: 40px;
            font-family: 'VT323', monospace;
            color: #888;
            font-size: 18px;
            position: relative;
            z-index: 10;
            background-color: rgba(0,0,0,0.8);
            padding: 10px;
            border: 2px solid #333;
        }
    </style>
</head>
<body>

    <div class="profile-container">
        <!-- RICKROLL EASTER EGG -->
        <a href="https://youtu.be/dQw4w9WgXcQ?si=JWIxkPOp9xFteFNp" target="_blank" class="easter-egg-link">
            <img src="https://media.discordapp.net/attachments/757310292328972351/1515182627261255881/LOGO_HOJA_PNG.png?ex=6a2e1349&is=6a2cc1c9&hm=7575a2e30f8fd4e3f518584bd4cbacd7c70113a952bc4a55b4bb235768c872f2&=&format=webp&quality=lossless&width=1376&height=778" alt="CheatGuys Official Logo" class="main-logo" onerror="this.onerror=null; this.src='https://placehold.co/340x120/1a1a1a/8A2BE2?text=CHEATGUYS!';">
        </a>
        <p class="subtitle">Infinity Brothers Studio</p>
    </div>

    <div class="links-container">
        
        <!-- =========================================
             SECTION 1: MAIN FILES (PURPLE)
             ========================================= -->
        <div class="menu-box box-main">
            <div class="section-title">SYSTEM_FILES <span class="cursor-blink">█</span></div>
            
            <a href="https://drive.google.com/file/d/1SonB_djMHOB4hJ8E7r-vTR7WhIlLRfpF/view?usp=drivesdk" target="_blank" class="link-btn btn-pitch">
                <span class="icon">📁</span>
                <div class="text-container">
                    <span class="btn-title">Official Pitch Bible</span>
                    <span class="btn-subtitle">READ_PRODUCTION_DECK.EXE</span>
                </div>
            </a>

            <a href="https://x.com/infinitybrooo" target="_blank" class="link-btn btn-x">
                <span class="icon">📢</span>
                <div class="text-container">
                    <span class="btn-title">Infinity Brothers on X</span>
                    <span class="btn-subtitle">FOLLOW_STUDIO_UPDATES</span>
                </div>
            </a>

            <a href="https://www.tiktok.com/@infinitybrooo?_r=1&_t=ZS-979pLsCg8xd" target="_blank" class="link-btn btn-tiktok">
                <span class="icon">📱</span>
                <div class="text-container">
                    <span class="btn-title">TikTok Animatics</span>
                    <span class="btn-subtitle">BEHIND_THE_SCENES_VIDEO</span>
                </div>
            </a>
        </div>

        <!-- =========================================
             SECTION 2: STICKERS (GREEN)
             ========================================= -->
        <div class="menu-box box-stickers">
            <div class="section-title">INVENTORY: STICKERS <span class="cursor-blink">█</span></div>

            <a href="https://drive.google.com/file/d/1yZCsVabFGpf_UgIVVHxMJMJ6r_d2aSYD/view?usp=sharing" target="_blank" class="link-btn btn-whatsapp">
                <span class="icon">💬</span>
                <div class="text-container">
                    <span class="btn-title">WhatsApp Sticker Pack</span>
                    <span class="btn-subtitle">EQUIP: AKANE'S ANXIETY</span>
                </div>
            </a>

            <a href="#" target="_blank" class="link-btn btn-discord">
                <span class="icon">👾</span>
                <div class="text-container">
                    <span class="btn-title">Discord Emotes</span>
                    <span class="btn-subtitle">JOIN_MULTIPLAYER_LOBBY</span>
                </div>
            </a>
        </div>

        <!-- =========================================
             SECTION 3: SUPPORT (GOLD)
             ========================================= -->
        <div class="menu-box box-support">
            <div class="section-title">MERCHANT_SHOP <span class="cursor-blink">█</span></div>

            <a href="#" target="_blank" class="link-btn btn-patreon">
                <span class="icon">🧡</span>
                <div class="text-container">
                    <span class="btn-title">Patreon Guild</span>
                    <span class="btn-subtitle">JOIN_THE_INFINITY_FAMILY</span>
                </div>
            </a>

            <a href="#" target="_blank" class="link-btn btn-kofi">
                <span class="icon">☕</span>
                <div class="text-container">
                    <span class="btn-title">Ko-fi Rest Point</span>
                    <span class="btn-subtitle">BUY_ANIMATORS_A_COFFEE</span>
                </div>
            </a>

            <a href="https://www.paypal.me/infinitybrooo" target="_blank" class="link-btn btn-paypal">
                <span class="icon">💸</span>
                <div class="text-container">
                    <span class="btn-title">PayPal Donations</span>
                    <span class="btn-subtitle">SUPPORT_INDIE_ANIMATION</span>
                </div>
            </a>
        </div>

        <!-- =========================================
             SECTION 4: MUSIC (PINK)
             ========================================= -->
        <div class="menu-box box-music">
            <div class="section-title">SOUND_TEST_MENU <span class="cursor-blink">█</span></div>

            <div class="music-card card-akane">
                <div class="card-header">
                    <span class="icon">🟪</span>
                    <div class="text-container">
                        <span class="btn-title">Akane: Noise I Can't Say Out Loud</span>
                    </div>
                </div>
                <div class="platform-links">
                    <a href="https://music.youtube.com/playlist?list=PLjimL7gdf7217m1FLAFeRCeqellB_wLlE&si=Ih13VcRduZ3dAQvz" target="_blank" class="plat-btn yt-btn">▶ YouTube</a>
                    <a href="https://open.spotify.com/playlist/7eayTb4jbfExCeT8r8rGAr?si=wWNnrpIdSVuDp0lz3m-6Dg&pi=1-2rYg0BSaicf" target="_blank" class="plat-btn sp-btn">🎧 Spotify</a>
                </div>
            </div>

            <div class="music-card card-rika">
                <div class="card-header">
                    <span class="icon">🟧</span>
                    <div class="text-container">
                        <span class="btn-title">Rika: Volume First, Consequences Later</span>
                    </div>
                </div>
                <div class="platform-links">
                    <a href="https://music.youtube.com/playlist?list=PLjimL7gdf720e-jVoBcLJ7HCw3Mzj6Wbx&si=HuNmgHbie30p18Jv" target="_blank" class="plat-btn yt-btn">▶ YouTube</a>
                    <a href="https://open.spotify.com/playlist/5ra2tvSpzrYs8f96ArFqg3?si=93s0Nn_jSNih3-bJSZPI4A&pi=vun3-nXiT_Kul" target="_blank" class="plat-btn sp-btn">🎧 Spotify</a>
                </div>
            </div>

            <div class="music-card card-momo">
                <div class="card-header">
                    <span class="icon">🌸</span>
                    <div class="text-container">
                        <span class="btn-title">Momo: Pink City Lights</span>
                    </div>
                </div>
                <div class="platform-links">
                    <a href="https://music.youtube.com/playlist?list=PLjimL7gdf720rFPx-tIPhw2SLfLLktTIV&si=bfoLuYhmp6rHxh7t" target="_blank" class="plat-btn yt-btn">▶ YouTube</a>
                    <a href="https://open.spotify.com/playlist/5I3zRnkbCrhdFzEYsNR2aV?si=UNxF8a1aTIWck4FvjEPr2g&pi=ONRT_DSNQCS4A" target="_blank" class="plat-btn sp-btn">🎧 Spotify</a>
                </div>
            </div>

            <div class="music-card card-jun">
                <div class="card-header">
                    <span class="icon">🟦</span>
                    <div class="text-container">
                        <span class="btn-title">Jun: Sleepy Groove, Sharp Timing</span>
                    </div>
                </div>
                <div class="platform-links">
                    <a href="https://music.youtube.com/playlist?list=PLjimL7gdf721v4C-hyzBO0tudRQG4mgWt&si=VgP4OuLfqwMg_Mqi" target="_blank" class="plat-btn yt-btn">▶ YouTube</a>
                    <a href="https://open.spotify.com/playlist/5xOhRBBW6qfcxgvpGZLjaI?si=Ngwlrq4eRmybcuSlObTiEA" target="_blank" class="plat-btn sp-btn">🎧 Spotify</a>
                </div>
            </div>
        </div>

        <!-- =========================================
             SECTION 5: CONTACT (CYAN)
             ========================================= -->
        <div class="menu-box box-contact">
            <div class="section-title">COMMUNICATIONS <span class="cursor-blink">█</span></div>

            <a href="mailto:infinitybrooothers@outlook.com" class="link-btn btn-mail">
                <span class="icon">✉️</span>
                <div class="text-container">
                    <span class="btn-title">Send System Mail</span>
                    <span class="btn-subtitle">infinitybrooothers@outlook.com</span>
                </div>
            </a>

            <a href="https://wa.me/qr/U2HZ5TMRR4I4G1" target="_blank" class="link-btn btn-whatsapp">
                <span class="icon">📱</span>
                <div class="text-container">
                    <span class="btn-title">WhatsApp Business</span>
                    <span class="btn-subtitle">DIRECT_CHAT_WITH_STUDIO</span>
                </div>
            </a>
        </div>

    </div>

    <div class="footer">
        <p>CheatGuys! is owned by Infinity Brothers Studios, all rights reserved, ©️2026</p>
    </div>

</body>
</html>
