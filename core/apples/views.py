from .models import Apple,Product
from .serializers import serialize_apples,ProductSerializer
from django.http import JsonResponse
from rest_framework import generics,status
from django.utils.decorators import method_decorator
from django_ratelimit.decorators import ratelimit
from rest_framework.response import Response


def apple_list(request):
    apples = Apple.objects.all()
    return JsonResponse(serialize_apples(apples), safe=False)

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        if getattr(request, 'limited', False):
            return Response(
                {"detail": "Rate limit exceeded. Please wait and try again later."},
                status=status.HTTP_429_TOO_MANY_REQUESTS
            )
        return super().get(request, *args, **kwargs)


# views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, LoginSerializer

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    @method_decorator(ratelimit(key='ip', rate='5/m'))
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
