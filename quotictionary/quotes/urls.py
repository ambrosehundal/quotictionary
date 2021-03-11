from django.conf.urls import url
from .api import QuoteApi
import quotes.views as q

urlpatterns = [
    url('api/quotes', QuoteApi.as_view()),
]