from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import UserSerializer


class SignUpView(APIView):
    permission_classes = [AllowAny]

    # post요청 받으면
    def post(self, request):
        print(f"request {request}")
        print(f"request.data {request.data}")

        # JSON -> Object
        # data(JSON->OBJECT), instance(OBJ->JSON)
        user_serializer = UserSerializer(request=request.data)

        # Serializer의 유효성 검사
        if user_serializer.is_valid():
            user_serializer.save()  # DB에 저장
            return Response(
                {
                    "your user": user_serializer.data,
                },
                status=status.HTTP_201_CREATED,
            )
        return Response(
            {
                "error": user_serializer.errors,
                "message": "회원가입 실패",
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    # get요청 받으면
    # def get(self, request):
