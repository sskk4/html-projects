#!/usr/bin/env python3
"""
Skrypt automatycznie dodaje linię z game-controls.js 
do wszystkich plików HTML w folderze "strona z grami/gry"
"""

import os
import re

def add_controls_to_html(file_path):
    """Dodaje game-controls.js do pliku HTML jeśli jeszcze nie ma"""
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Sprawdź czy już ma game-controls.js
        if 'game-controls.js' in content:
            print(f"✓ {file_path} - już ma sterowanie, pomijam")
            return False
        
        # Sprawdź czy ma tag </body>
        if '</body>' not in content.lower():
            print(f"⚠ {file_path} - brak tagu </body>, pomijam")
            return False
        
        # Dodaj skrypt przed zamknięciem </body>
        script_line = '\n\t<!-- Uniwersalne sterowanie -->\n\t<script src="../game-controls.js"></script>\n'
        
        # Zamień </body> na script + </body>
        new_content = re.sub(
            r'</body>',
            script_line + '</body>',
            content,
            flags=re.IGNORECASE
        )
        
        # Zapisz plik
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"✅ {file_path} - dodano sterowanie!")
        return True
        
    except Exception as e:
        print(f"❌ {file_path} - błąd: {e}")
        return False

def process_directory(directory):
    """Przetwarza wszystkie pliki HTML w katalogu"""
    
    if not os.path.exists(directory):
        print(f"❌ Katalog {directory} nie istnieje!")
        return
    
    html_files = [f for f in os.listdir(directory) if f.endswith('.html')]
    
    if not html_files:
        print(f"⚠ Nie znaleziono plików HTML w {directory}")
        return
    
    print(f"\n📁 Znaleziono {len(html_files)} plików HTML\n")
    
    success_count = 0
    for html_file in html_files:
        file_path = os.path.join(directory, html_file)
        if add_controls_to_html(file_path):
            success_count += 1
    
    print(f"\n✨ Zakończono! Dodano sterowanie do {success_count}/{len(html_files)} plików")

if __name__ == "__main__":
    # ZMIEŃ TĘ ŚCIEŻKĘ NA SWOJĄ!
    games_directory = "strona z grami"
    
    print("🎮 Automatyczne dodawanie sterowania do gier Flash")
    print("=" * 50)
    
    process_directory(games_directory)
    
    print("\n" + "=" * 50)
    print("✅ Gotowe! Teraz skopiuj plik game-controls.js do folderu 'strona z grami'")
    print("📝 Struktura powinna wyglądać tak:")
    print("   strona z grami/")
    print("   ├── game-controls.js  ← TUTAJ!")
    print("   └── gry/")
    print("       ├── 1.html")
    print("       ├── 2.html")
    print("       └── ...")