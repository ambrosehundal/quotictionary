from django.db import models

# Create your models here.
class Quotes(models.Model):
    category = models.CharField(max_length=30)
    description = models.CharField(max_length=250)
    