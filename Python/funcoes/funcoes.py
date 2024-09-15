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


# retorno das funções

def cacTotal(numbers):
    return sum(numbers)

def return_predecessor_successor(number):
    predecessor = number-1
    successor =number+1
    
    return predecessor, successor

print(cacTotal([10,10,10,50,50]))
print(return_predecessor_successor(100))

# argumentos nomeados

def saveCar(model,year,plate):
    print(f' Carro salvo com sucesso , {model}/{year}/{plate}')
    
saveCar("Fiat",2017,"ACV")
saveCar(model='Fiat',year=2020,plate='abc')    

# *args

def showPoem(date,*args,**kwargs):
    text="\n".join(args)
    meta="\n".join([f"{key.title()}: {value}" for key, value in kwargs.items()])
    message=f"{date}\n\n{text}\n\n{meta}"
    print(f'{message}')
    
showPoem("Zen of Java","Beautiful is better than ugly.",autor="Tim Peters",year=2000)    