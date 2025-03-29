from django.urls import path
from . import views

urlpatterns = [
    path('', views.task_list, name='task_list'),
    path('create/', views.task_create, name='task_create'),
    path('<int:pk>/', views.task_detail, name='task_detail'),
    path('<int:pk>/update/', views.task_update, name='task_update'),
    path('<int:pk>/delete/', views.task_delete, name='task_delete'),
    path('<int:pk>/complete/', views.task_complete, name='task_complete'),
    
    # API URLs (opcional)
    path('api/tasks/', views.TaskListAPI.as_view(), name='task_api_list'),
    path('api/tasks/<int:pk>/', views.TaskDetailAPI.as_view(), name='task_api_detail'),
]