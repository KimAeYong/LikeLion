from django.shortcuts import render, redirect, reverse, get_object_or_404
from .models import Post, Category
from django.core.paginator import Paginator
from django.contrib import messages


# Create your views here.
def home(request):
    posts = Post.objects.all()
    paginator = Paginator(posts, 10)
    pageNum = request.GET.get("page")
    posts = paginator.get_page(pageNum)
    return render(request, "home.html", {"posts": posts})


def post_create(request):
    title = request.POST.get("title")
    body = request.POST.get("body")
    date = request.POST.get("date")
    category = Category.objects.get(pk=request.POST.get("category"))
    post = Post.objects.create(title=title, body=body, date=date, category=category)
    return redirect(reverse("post_detail", args=[post.pk]))

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, "post_detail.html", {"post": post})


def post_update(request, pk):
    if Post.objects.filter(pk=pk).exists():
        post = get_object_or_404(Post, pk=pk)
        post.title = request.POST.get("title")
        post.body = request.POST.get("body")
        post.date = request.POST.get("date")
        post.category = Category.objects.get(pk=request.POST.get("category"))
        post.save()
        return redirect(reverse("post_detail", args=(post.pk,)))
    else:
        messages.error(request, "Post does not exist")
        return redirect(reverse("post_detail", args=(post.pk,)))


def post_delete(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.delete()
    messages.success(request, "Post deleted successfully")
    return redirect("home")
