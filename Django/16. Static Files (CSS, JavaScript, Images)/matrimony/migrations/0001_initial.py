# Generated by Django 4.2.16 on 2024-11-11 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Unnamed', max_length=100)),
                ('profile_picture', models.ImageField(blank=True, null=True, upload_to='')),
                ('age', models.IntegerField()),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('occupation', models.CharField(max_length=100, null=True)),
                ('birth_data', models.DateField(null=True)),
                ('is_married', models.BooleanField(default=False)),
                ('email', models.EmailField(max_length=250, unique=True)),
            ],
        ),
    ]
