# String e fatiamento
curso="Java"

print(curso.center(10,"!"))
print(".".join(curso))

nome="jUliANA"

print(nome.upper())
print(nome.lower())
print(nome.title())

randomText="         olá Mundo           "
print(randomText+ ".")
print(randomText.strip()+ ".")
print(randomText.rstrip()+ ".")
print(randomText.lstrip()+ ".")

menu="Java😊😊😊"
print("####"+menu+"####")
print(menu.center(14))
print(menu.center(14, "#"))
print(menu.center(20, "#"))
print("j-a-v-a")

for letra in menu:
    print(letra,end="-")
print()

print("-".join(menu))    
