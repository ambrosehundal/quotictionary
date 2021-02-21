from django.conf.urls import url
from .api import QuoteApi

urlpatterns = [
    url('api/quotes', QuoteApi.as_view()),
]