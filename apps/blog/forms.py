from django import forms
from .models import Post

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = ('title', 'content')
        widgets = {
            'title': forms.TextInput(attrs={'class': 'input-field w-full p-3 border border-gray-300 rounded-lg focus:outline-none min-h-[150px]', 'placeholder': 'Enter your title'}),
            'content': forms.Textarea(attrs={'class': 'input-field w-full p-3 border border-gray-300 rounded-lg focus:outline-none min-h-[150px]', 'placeholder': 'Write your content here...'}),
        }
