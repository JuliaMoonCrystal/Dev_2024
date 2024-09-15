def showMessage():
    print('Olá Mundo')

def showWelComeMessage(name):
    print(f'Seja bem vindo {name}')
    
def showOkMessage(name='Sicrano'):
    print(f'Sucesso, {name}')    


showMessage()
showWelComeMessage(name='Fulano')
showOkMessage()
showOkMessage(name='Fulano')