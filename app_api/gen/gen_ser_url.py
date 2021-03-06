


model = input("输入model:")
serializers_txt = f"""

class {model}Serializer(serializers.ModelSerializer):
    class Meta:
        model = {model}
        fields = "__all__"
"""
model_name = model

view_txt = f"""

class {model_name}ViewSet(MyViewSet):
        serializer_class = {model_name}Serializer
        queryset = {model_name}.objects.all()
        filter_class = {model_name}Filter
"""

url_txt = f"""
router.register('{get_lower_case_name(model_name)}/?', views.{model_name}ViewSet)
"""

filter_txt = f"""
class {model_name}Filter(filters.FilterSet):

    class Meta:
        model = {model}
        fields = "__all__"
"""
print(serializers_txt)
print(view_txt)
print(url_txt)
print(filter_txt)
