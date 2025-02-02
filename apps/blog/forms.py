from django import forms
from .models import Post

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = ('title', 'content')
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Enter your title'}),
            'content': forms.Textarea(attrs={'class': 'form-textarea', 'placeholder': 'Write your content here...'}),
        }
