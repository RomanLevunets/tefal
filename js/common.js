$(document).ready(function () {

    //mask
        $('#tell').mask("+38(999) 999-99-99");
    //validator
    //add method regex
        $.validator.addMethod(
            "regex",
            function(value, element, regexp)
            {
                if (regexp.constructor != RegExp) {
                    regexp = new RegExp(regexp);
                }
                else if (regexp.global) {
                    regexp.lastIndex = 0;
                }
                return this.optional(element) || regexp.test(value);
            },
            "Упс, перевірте правильність введених даних!"
        );
    //validate
        $('#formSend').validate({
            rules: {
                name: {
                    required: true,
                    regex: /([a-zA-Zа-яА-Я\`ґєҐЄ´ІіЇї\s]+)/,
                    minlength: 5
                },
                tell: {
                    required: true,
                    minlength: 10
                },
                city: {
                    required: true,
                    regex: /([a-zA-Zа-яА-Я\`ґєҐЄ´ІіЇї\s]+)/,
                    minlength: 4
                },
                shop: {
                    required: true,
                    regex: /([a-zA-Zа-яА-Я\`ґєҐЄ´ІіЇї\s]+)/,
                    minlength: 5
                },
                i_gree: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Це поле обов'язково для заповнення",
                    minlength: "Мінімум 5 символів"
                },
                tell: {
                    required: "Це поле обов'язково для заповнення",
                    minlength: "Мінімум 10 символів"
                },
                city: {
                    required: "Це поле обов'язково для заповнення",
                    minlength: "Мінімум 4 символи"
                },
                shop: {
                    required: "Це поле обов'язково для заповнення",
                    minlength: "Мінімум 5 символів"
                },
                i_gree: {
                    required: "Установи флажок"
                }
            },
            // add error from parents block
            highlight: function(element, errorClass, validClass) {
                $(element).parent('div').addClass('error-block').removeClass('valid-block');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).parent('div').addClass('valid-block').removeClass('error-block');
            }
        });
        $('#for-check').click(function () {
            $('.formSend-i_gree').toggleClass('active');
        });
        $('.header-burger').click(function () {
            $('.header-burger span').toggleClass('active');
            $('.wrapper').toggleClass('active');
            $('.menu').toggleClass('act');

        });

        function readURL(input) {

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    $('.preview-img img').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#input-file").change(function() {
            readURL(this);
        });
});