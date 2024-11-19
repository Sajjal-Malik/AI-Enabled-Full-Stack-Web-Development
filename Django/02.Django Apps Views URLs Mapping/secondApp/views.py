from django.shortcuts import render
from django.http import HttpResponse

# template, html string, simple string and json object

# Create your views here.
def home1(request):
    # string
    return HttpResponse("Hello, World from home1 in secondApp")


def home2(request):
    # html string
    return HttpResponse("<strong>Hello, World from home2 in secondApp</strong>")

def home3(request):
    return HttpResponse("Hello, World from home3 in secondApp")
