from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from quotes.models import *
from quotes.serializers import QuoteSerializer

# Create your views here.
@csrf_exempt
def quotes_list(request):
    if request.method == 'GET':
        quotes = Quotes.objects.filter(category='Productivity')
        serializer = QuoteSerializer(quotes, many=True)

        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        print(request.POST['quote_dict'])
        category = request.POST['category']
        description = request.POST['description']

        new_quote = Quotes(category=category, description=description)
        new_quote.save()