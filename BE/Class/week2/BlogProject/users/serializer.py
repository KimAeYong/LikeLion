from rest_framework import serializers
from .models import CustomUser as User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields 내부의 것들만 선택해서 직렬화함.
        # fields = '__all__' 을 하면 user의 모든 것들을 직렬화.
        fields = ['username', 'password', 'email', 'phone']
        #여기는 직렬화 하지 않을 애들만 적어줌.
        extra_kwargs = {
            'password': {'write_only': True},
        }

