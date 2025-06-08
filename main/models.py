from django.db import models

class cont(models.Model):
    name=models.CharField(max_length=200)
    email=models.EmailField()
    mobile=models.BigIntegerField()
    subject=models.TextField()
    msg=models.TextField()

    def __str__(self):
        return f"Inquiry from {self.name},{self.email},{self.mobile},{self.subject},{self.msg}"
