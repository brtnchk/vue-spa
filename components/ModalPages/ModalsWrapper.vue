<template>
  <div class="modals-wrapper">
    <LoginModal></LoginModal>
    <PricingModal></PricingModal>
    <RegisterModal></RegisterModal>
    <PaymentDetailsModal></PaymentDetailsModal>
    <AddCardModal></AddCardModal>
    <ResetPasswordModal></ResetPasswordModal>
    <PassageSettingsModal></PassageSettingsModal>
    <RedactionSettingsModal></RedactionSettingsModal>
    <DiscardWorkModal></DiscardWorkModal>
    <CreateCourseModal></CreateCourseModal>
    <EditCourseModal></EditCourseModal>
    <RemoveCourseModal></RemoveCourseModal>
    <AddNoteModal></AddNoteModal>
    <NotesEndSessionModal></NotesEndSessionModal>
    <NotesResultsModal></NotesResultsModal>
    <PasswordResetModal></PasswordResetModal>
  </div>
</template>

<script>
  import LoginModal from './Auth/LoginModal';
  import PricingModal from './Auth/PricingPlanModal';
  import RegisterModal from './Auth/RegisterModal';
  import PaymentDetailsModal from './Auth/PaymentDetailsModal';
  import AddCardModal from './UserSettings/AddCardModal';
  import ResetPasswordModal from './Auth/ResetPasswordModal';
  import PassageSettingsModal from './Tools/PassageSettingsModal';
  import RedactionSettingsModal from './Tools/RedactionSettingsModal';
  import DiscardWorkModal from './DiscardWorkModal.vue';
  import CreateCourseModal from './Courses/CreateCourseModal.vue';
  import EditCourseModal from './Courses/EditCourseModal.vue';
  import RemoveCourseModal from './Courses/RemoveCourseModal.vue';
  import AddNoteModal from './Courses/AddNoteModal.vue';
  import NotesEndSessionModal from './Notes/NotesEndSessionModal.vue';
  import NotesResultsModal from './Notes/NotesResultsModal.vue';
  import PasswordResetModal from './PasswordResetModal.vue';

  export default {
    name: 'ModalsWrapper',
    components: {
      LoginModal,
      PricingModal,
      RegisterModal,
      PaymentDetailsModal,
      AddCardModal,
      ResetPasswordModal,
      PassageSettingsModal,
      RedactionSettingsModal,
      DiscardWorkModal,
      CreateCourseModal,
      EditCourseModal,
      RemoveCourseModal,
      AddNoteModal,
      NotesEndSessionModal,
      NotesResultsModal,
      PasswordResetModal
    },
    props: [],
    data() {
      return {}
    },
    mounted() {
    },
    created() {
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped>
</style>
