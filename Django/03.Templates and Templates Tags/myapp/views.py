from django.shortcuts import render

# Create your views here.
def index(request):
    # Read the database
    # Creates context varaibles (dict)
    my_dict = {'pages':['one','tow', 'three'],
               'courses':['Frontend','Backend']}
    return render(request, 'myapp/index.html', context=my_dict)

def home(request):
    return render(request, 'myapp/home.html')
