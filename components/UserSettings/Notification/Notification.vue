<template>
    <div class="section__wrapper-right">
        <h1 class="section__title">
            <div class="section__title-wrap">
                <div class="section__title-left">
                    <div class="section__title-icon"><i class="icon-font icon-notification"></i></div><span>Notification</span>
                </div>
            </div>
        </h1>
        <div class="section__block section__block--notification">
            <form class="form" action="" method="">
                <p class="section__block-title">When do you want notifications?</p>
                <p class="section__block-subtitle">Study reminders</p>
                <div class="section__block-wrap section__block-wrap--select">
                    <div class="section__block-left">
                        <div class="form__field form__field--checkbox">
                            <div class="form__checkbox-wrap">
                                <input class="form__checkbox" type="checkbox" id="notificationReminders" name="">
                                <label for="notificationReminders">
                                    <u></u><span>Email reminders</span><i class="icon-font icon-check"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="section__block-right"><span>Time of day</span>
                        <div class="form__field form__field--select">
                            <div class="form__select-wrap">
                                <div class="form__select"><span class="select__value"></span>
                                    <select name="">
                                        <option value="0" disabled selected hidden>8:00 AM</option>
                                        <option value="1">8:00 AM</option>
                                        <option value="1">8:00 AM</option>
                                        <option value="1">8:00 AM</option>
                                        <option value="1">8:00 AM</option>
                                        <option value="1">8:00 AM</option>
                                        <option value="1">8:00 AM</option>
                                        <option value="1">8:00 AM</option>
                                        <option value="1">8:00 AM</option>
                                        <option value="1">8:00 AM</option>
                                        <option value="1">8:00 AM</option>
                                        <option value="1">8:00 AM</option>
                                        <option value="1">8:00 AM</option>
                                    </select><span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="section__block-subtitle">When a note is added to your classes</p>
                <div class="section__block-wrap">
                    <div class="section__block-left">
                        <div class="form__field form__field--checkbox">
                            <div class="form__checkbox-wrap">
                                <input class="form__checkbox" type="checkbox" id="notificationClasses" name="">
                                <label for="notificationClasses">
                                    <u></u><span>Class 1</span><i class="icon-font icon-check"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="section__block-right"><a href="#" title="">View class</a></div>
                </div>
                <p class="section__block-subtitle">Email updates</p>
                <div class="section__block-wrap">
                    <div class="section__block-left">
                        <div class="form__field form__field--checkbox">
                            <div class="form__checkbox-wrap">
                                <input class="form__checkbox" type="checkbox" checked="checked" id="notificationEmail0" name="">
                                <label for="notificationEmail0">
                                    <u></u><span>Memscore updates and newsletters</span><i class="icon-font icon-check"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="section__block-right"><span>infrequently</span></div>
                </div>
                <div class="section__block-wrap">
                    <div class="section__block-left">
                        <div class="form__field form__field--checkbox">
                            <div class="form__checkbox-wrap">
                                <input class="form__checkbox" type="checkbox" id="notificationEmail1" name="">
                                <label for="notificationEmail1">
                                    <u></u><span>Memscore promotional emails</span><i class="icon-font icon-check"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="section__block-right"><span>infrequently</span></div>
                </div>
                <p class="section__block-subtitle">What is your time zone?</p>
                <p class="section__block-text">Memscore uses your time zone to send notifications at the correct time of day.</p>
                <p class="section__block-text section__block-text--p">Auto-detect my time zone.</p>
                <div class="form__field form__field--select">
                    <div class="form__select-wrap">
                        <div class="form__select"><span class="select__value"></span>
                            <select name="">
                                <option value="0" disabled selected hidden>(GMT+00:00) UTC</option>
                                <option value="1">(GMT+00:00) UTC</option>
                                <option value="1">(GMT+00:00) UTC</option>
                                <option value="1">(GMT+00:00) UTC</option>
                                <option value="1">(GMT+00:00) UTC</option>
                                <option value="1">(GMT+00:00) UTC</option>
                                <option value="1">(GMT+00:00) UTC</option>
                                <option value="1">(GMT+00:00) UTC</option>
                                <option value="1">(GMT+00:00) UTC</option>
                                <option value="1">(GMT+00:00) UTC</option>
                                <option value="1">(GMT+00:00) UTC</option>
                                <option value="1">(GMT+00:00) UTC</option>
                                <option value="1">(GMT+00:00) UTC</option>
                            </select><span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                        </div>
                    </div>
                </div>
                <div class="section__block-footer">
                    <button class="c-btn c-btn--bigH c-btn--darkGreen" type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Notification"
  }
</script>

<style scoped>

</style>
