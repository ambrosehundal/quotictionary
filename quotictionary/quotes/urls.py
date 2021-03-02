from django.conf.urls import url
from .api import QuoteApi
import quotes.views as q

urlpatterns = [
    url('api/quotes', q.quotes_list),
]