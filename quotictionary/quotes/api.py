from rest_framework import generics
from rest_framework.response import Response 
from .serializers import QuoteSerializer
from .models import Quotes


class QuotesList(generics.ListAPIView):
    serializer_class = QuoteSerializer

    def get_query




class QuoteApi(generics.ListCreateAPIView):
    queryset = Quotes.objects.all()
    serializer_class = QuoteSerializer