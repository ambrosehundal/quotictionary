from django.db import models

# Create your models here.
class Quotes(models.Model):
    category = models.CharField(max_length=30)
    description = models.CharField(max_length=250)


class TimelessPrinciples(models.Model):
    author = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=None)
    article_link = models.CharField(max_length=None, blank=True)
    video_link = models.CharField(max_length=None, blank=True)



class MentalModels(models.Model):
    author = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=None)
    article_link = models.CharField(max_length=None, blank=True)
    video_link = models.CharField(max_length=None, blank=True)