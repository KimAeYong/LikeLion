from django.shortcuts import render, redirect, reverse, get_object_or_404
from .models import Post
from django.core.paginator import Paginator
from django.contrib import messages

# Create your views here.
def home(request):
    posts = Post.objects.all() 
    paginator = Paginator(posts, 10)  
    pageNum = request.GET.get('page') 
    posts = paginator.get_page(pageNum)
    return render(request, 'home', {'posts':posts})

def post_create(request):
    title = request.POST.get('title')
    body = request.POST.get('body')
    date = request.POST.get('date')
    category = request.POST.get('category')
    Post.objects.create(title=title, body=body, date=date, category=category)
    return redirect(reverse('post_detail', args=[Post.pk]))

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'post_detail.html', {'post':post})
    
def post_update(request, pk):
    if Post.pk.filter(pk=pk).exists():
        post = get_object_or_404(Post, pk=pk)
        post.title = request.POST.get('title')
        post.body = request.POST.get('body')
        post.date = request.POST.get('date')
        post.category = request.POST.get('category')
        post.save()
        return redirect(reverse('post_detail'), args=[post.pk])
    else:
        return redirect(reverse('post_detail'), args=[post.pk])

def post_delete(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.delete()
    messages.success(request, 'Post deleted successfully')
    return redirect('home')

