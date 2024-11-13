from django.db import models


class Apple(models.Model):
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    photo_url = models.URLField()

    def __str__(self):
        return self.name


class Product(models.Model):
    PRODUCT_TYPES = [
        ('herbal', 'Herbal Supplements'),
        ('essential', 'Essential Oils'),
        ('skin', 'Skin Care Products'),
        ('tea', 'Tea and Infusion'),
    ]
    name = models.CharField(max_length=255)     
    price = models.DecimalField(max_digits=10,decimal_places=2)  
    description = models.TextField()             
    photo = models.URLField()
    type = models.CharField(max_length=20, choices=PRODUCT_TYPES,default='herbal')


    def __str__(self):
        return self.name

