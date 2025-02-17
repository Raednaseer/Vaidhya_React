# Generated by Django 5.1.2 on 2024-10-23 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apples', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('description', models.TextField()),
                ('photo', models.FileField(upload_to='products/')),
            ],
        ),
    ]
