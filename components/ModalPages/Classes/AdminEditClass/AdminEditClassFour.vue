<template>
  <div class="body p-classes">
    <section class="c-modal c-modal--classAdminEdit" id="c-modal">
      <div class="c-modal__wrapper">
        <div class="c-modal__header d-flex align-items-center">
          <p class="c-modal__title subtitle">Edit class</p><a class="c-modal__close" href="#" title=""><i class="icon-font icon-error"></i></a>
        </div>
        <div class="c-modal__body">
          <form class="form" action="" method="">
            <div class="bill__create">
              <div class="bill__create-left">
                <label class="form__label">Cover</label>
                <div class="bill__create-box"><img srcset="./img/img-create.png, ./img/img-create@2x.png 2x" alt="" title="">
                  <p>Choose an image</p>
                </div>
              </div>
              <div class="bill__create-right d-flex flex-column justify-content-between">
                <div class="form__field form__field--input">
                  <label class="form__label" for="createTitle">Class name</label>
                  <div class="form__input-wrap">
                    <input class="form__input" type="text" id="createTitle" name="createTitle" placeholder="Type your title">
                  </div>
                  <div class="form__notify form__notify--hide"></div>
                </div>
                <div class="form__field form__field--input">
                  <label class="form__label" for="createDescription">Description  (optional)</label>
                  <div class="form__input-wrap">
                    <input class="form__input" type="text" id="createDescription" name="createDescription" placeholder="Type your description">
                  </div>
                  <div class="form__notify form__notify--hide"></div>
                </div>
              </div>
            </div>
            <div class="form__field form__field--input form__field--dropdown">
              <label class="form__label">Institution (optional)</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="sendMessageTo" name="sendMessageTo" placeholder="Enter name of institution">
              </div>
              <div class="form__input-dropdown">
                <div>
                  <ul>
                    <li><a class="form__input-dropdown--add" href="#">Add institution</a></li>
                    <li>
                      <p>Lorem 1  ·  City </p>
                    </li>
                    <li>
                      <p>Lorem 2  ·  City </p>
                    </li>
                    <li>
                      <p>Lorem 3  ·  City </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="form__field form__field--input form__field--dropdown">
              <label class="form__label">City</label>
              <div class="form__input-wrap">
                <input class="form__input" type="text" id="1" name="1" placeholder="Enter name of city">
              </div>
              <div class="form__input-dropdown">
                <div>
                  <ul>
                    <li><a class="form__input-dropdown--add" href="#">Add institution</a></li>
                    <li>
                      <p>Lorem 1  ·  City </p>
                    </li>
                    <li>
                      <p>Lorem 2  ·  City </p>
                    </li>
                    <li>
                      <p>Lorem 3  ·  City </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="form__field form__field--group">
              <div>
                <label class="form__label">Country</label>
                <div class="form__field form__field--select">
                  <div class="form__select-wrap">
                    <div class="form__select"><span class="select__value"></span>
                      <select name="">
                        <option value="0" disabled selected hidden>Select a country</option>
                        <option value="1">2</option>
                        <option value="1">2</option>
                        <option value="1">2</option>
                        <option value="1">2</option>
                        <option value="1">2</option>
                        <option value="1">2</option>
                        <option value="1">2</option>
                        <option value="1">2</option>
                        <option value="1">2</option>
                        <option value="1">2</option>
                        <option value="1">2</option>
                        <option value="1">2</option>
                      </select><span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label class="form__label">State</label>
                <div class="form__field form__field--select">
                  <div class="form__select-wrap">
                    <div class="form__select"><span class="select__value"></span>
                      <select name="">
                        <option value="0" disabled selected hidden>Select a state</option>
                        <option value="1">3</option>
                        <option value="1">3</option>
                        <option value="1">3</option>
                        <option value="1">3</option>
                        <option value="1">3</option>
                        <option value="1">3</option>
                        <option value="1">3</option>
                        <option value="1">3</option>
                        <option value="1">3</option>
                        <option value="1">3</option>
                        <option value="1">3</option>
                        <option value="1">3</option>
                      </select><span class="select__icon-wrap"><i class="icon-font icon-arrow"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="c-modal__text">Select from existing institutions instead.</p>
            <div class="form__field form__field--checkbox">
              <div class="form__checkbox-wrap">
                <input class="form__checkbox" type="checkbox" id="notesExport" name="">
                <label for="notesExport">
                  <u></u><span>Allow other members to add notes and new members.</span><i class="icon-font icon-check"></i>
                </label>
              </div>
            </div>
            <div class="form__field form__field--btn">
              <button class="form__btn" type="submit">Create class</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'AdminEditClassFour',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
