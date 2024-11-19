from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse

# template, html string, simple string and json object

# Create your views here.


def home1(request):
    # string
    return HttpResponse("Hello, World from home1 in firstApp")


def home2(request):
    # html string
    return HttpResponse("<strong>Hello, World from home2 in firstApp</strong>")


def home3(request):
    return redirect("secondApp:home3")


def home4(request):
    my_dict = {
        "name": "Malik",
        "age": 24
    }
    return JsonResponse(my_dict)
