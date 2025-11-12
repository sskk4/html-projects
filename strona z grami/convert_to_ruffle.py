import os
import re
from pathlib import Path

def add_ruffle_to_html(html_content):
    """Dodaje Ruffle do pliku HTML i aktualizuje tagi embed/object"""
    
    # Sprawdź czy już ma Ruffle
    if 'ruffle' in html_content.lower():
        return html_content
    
    # Dodaj Ruffle script przed </head>
    if '</head>' in html_content:
        ruffle_script = '\n\t<!-- Ruffle Flash Emulator -->\n\t<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>\n'
        html_content = html_content.replace('</head>', ruffle_script + '</head>')
    elif '<body>' in html_content:
        # Jeśli nie ma </head>, dodaj przed <body>
        ruffle_script = '<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>\n'
        html_content = html_content.replace('<body>', ruffle_script + '<body>')
    
    return html_content

def process_directory(directory_path):
    """Przetwarza wszystkie pliki HTML w katalogu"""
    
    directory = Path(directory_path)
    html_files = list(directory.rglob('*.html')) + list(directory.rglob('*.HTML'))
    
    print(f"Znaleziono {len(html_files)} plików HTML")
    
    converted_count = 0
    skipped_count = 0
    
    for html_file in html_files:
        try:
            # Odczytaj plik
            with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            # Sprawdź czy zawiera embed lub object z .swf
            if '.swf' not in content.lower():
                print(f"⏭️  Pomijam: {html_file.name} (brak plików Flash)")
                skipped_count += 1
                continue
            
            # Dodaj Ruffle
            new_content = add_ruffle_to_html(content)
            
            # Zapisz zmieniony plik
            if new_content != content:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"✅ Zaktualizowano: {html_file.name}")
                converted_count += 1
            else:
                print(f"⏭️  Pomijam: {html_file.name} (już ma Ruffle)")
                skipped_count += 1
                
        except Exception as e:
            print(f"❌ Błąd przy przetwarzaniu {html_file.name}: {e}")
    
    print(f"\n📊 Podsumowanie:")
    print(f"   Zaktualizowano: {converted_count}")
    print(f"   Pominięto: {skipped_count}")
    print(f"   Razem: {len(html_files)}")

def main():
    print("=" * 50)
    print("🎮 Konwerter strony Flash → Ruffle")
    print("=" * 50)
    print()
    
    # Pobierz ścieżkę do katalogu
    current_dir = os.getcwd()
    print(f"Aktualny katalog: {current_dir}")
    print()
    
    choice = input("Czy chcesz przetworzyć bieżący katalog? (t/n): ").lower()
    
    if choice == 't':
        directory = current_dir
    else:
        directory = input("Podaj ścieżkę do katalogu: ").strip()
    
    if not os.path.exists(directory):
        print(f"❌ Katalog nie istnieje: {directory}")
        return
    
    print(f"\n🔍 Przeszukuję katalog: {directory}")
    print()
    
    process_directory(directory)
    
    print("\n✨ Konwersja zakończona!")
    print("\n📝 Następne kroki:")
    print("   1. Sprawdź czy wszystko działa lokalnie")
    print("   2. Stwórz repozytorium GitHub")
    print("   3. Wrzuć pliki: git add . && git commit -m 'Flash to Ruffle'")
    print("   4. Wypchaj: git push")
    print("   5. Włącz GitHub Pages w ustawieniach repo")

if __name__ == "__main__":
    main()