<template>
    <div>
    <nav class="arrivals_product center">
        <h2 class="arrivals_title">New Arrivals</h2>
        <nav class="readcrumbs_arrivals"><a href="index.html" class="link_arrivals">Home/</a> <a href="#"
                                                                                                 class="link_arrivals">Men/</a>
            <a href="#" class="link_arrivals">New Arrivals</a></nav>
    </nav>
    <secion class="form_input center">
        <div class="shipping__adress">
            <h3 class="shipping__name">01. Shipping Adress</h3>
            <div class="first__block_position">
                <div class="shipping__left_block">
                    <div class="title__shipping">
                        <p class="title__text_1">Check as&nbsp;a&nbsp;guest or&nbsp;register</p>
                        <p class="title__text_2">Register with&nbsp;us for future convenience</p>
                    </div>
                    <form class="shipping__checkboxes">
                        <input type="radio" id="checkbox_shipping_1" name="shipp" class="checkbox__shipping_style">
                        <label for="checkbox_shipping_1" class="label__shipping_check">checkout
                            as&nbsp;guest</label>
                        <input type="radio" id="checkbox_shipping_2" name="shipp" class="checkbox__shipping_style">
                        <label for="checkbox_shipping_2" class="label__shipping_check">register</label>
                    </form>
                    <div class="shipping__register">
                        <p class="title__text_1">register and save time!</p>
                        <p class="title__text_2">Register with&nbsp;us for future convenience</p>
                    </div>
                    <div class="shipping__links">
                        <a href="#" class="shipping__arrow_links"><i
                                class="fas fa-chevron-right fa-chevron-right-checkout"></i><i
                                class="fas fa-chevron-right right__arrow fa-chevron-right-checkout"></i>Fast and
                            easy
                            checkout</a>
                        <a href="#" class="shipping__arrow_links"><i
                                class="fas fa-chevron-right fa-chevron-right-checkout"></i><i
                                class="fas fa-chevron-right right__arrow fa-chevron-right-checkout"></i>Easy access
                            to your
                            order history and status</a>

                    </div>
                    <button class="shipping__button">Continue</button>
                </div>
                <div class="shipping__right_block">
                    <div class="already__block">
                        <p class="title__text_1">Already registed?</p>
                        <p class="title__text_2">Please log in&nbsp;below</p>
                    </div>
                    <form>
                        <span class="input__title_already">EMAIL ADDRESS</span><span class="red__star">*</span><br>
                        <input type="email" class="already__input">
                    </form>
                    <div>
                        <span class="input__title_already">PASSWORD</span><span class="red__star">*</span><br>
                        <input type="password" class="already__input">
                    </div>
                    <p class="fileds">* Required Fileds</p>
                    <div class="buttons__block">
                        <button class="shipping__button">log in</button>
                        <div class="forgot"><a href="#" class="forgot__link">Forgot Password ?</a></div>
                    </div>
                </div>
            </div>
        </div>
    </secion>
    <div class="other__zones center">
        <div class="billing__information empty_shiping_block"><h3 class="shipping__name">02. billing
            information</h3></div>
        <div class="shipping__information empty_shiping_block"><h3 class="shipping__name">03. Shipping
            information</h3>
        </div>
        <div class="shipping__method empty_shiping_block"><h3 class="shipping__name">04. Shipping method</h3></div>
        <div class="payment__method empty_shiping_block"><h3 class="shipping__name">05. payment method</h3></div>
        <div class="order__review empty_shiping_block"><h3 class="shipping__name">06. order review</h3></div>
    </div>
    </div>
</template>
