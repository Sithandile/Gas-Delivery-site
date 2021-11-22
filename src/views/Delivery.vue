<template>
  <form>
      <label>Name and Surname</label>
      <input type="name" required v-model="name">

      <label>Contact Number</label>
      <input type="contact" required v-model="number">

      <label>Address</label>
      <input type="address" required v-model="address">

      <label>Delivery Notes</label>
      <input type="notes" required v-model="notes">

      <label>Refill/Exchange Options</label>
      <select v-model="options">
          <option value="9KG">9KG Refill - R250</option>
          <option value="9KG Exchange">9 KG exchange - R400</option>
          <option value="19KG">19 KG Refill - R550</option>
          <option value="19KG Exchange">19 exchange - R1000</option>
          <option value="48KG">48 KG Refill - R1300</option>
          <option value="48KG Exchange">48 KG exchange - R1900</option>
      </select>

      <div class="card">
          <input type="checkbox" v-model="card" required>
          <label>Card Payment</label>
      </div>

      <div class="cash">
          <input type="checkbox" v-model="cash" required>
          <label>Cash Payment</label>
      </div>

      <div class="submit">
          <button>Submit Order</button>
      </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      conatct: '',
      address: '',
      notes: '',
      options: '',
      card: false,
      cash: false
    }
  }
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  input[type="checkbox"] {
      display: inline-block;
      width: 16px;
      margin: 0 10px 0 0;
      position: relative;
      top: 2px;
  }
  button {
      background: rgba(71, 70, 70, 0.829);
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      border-radius: 20px;
      color: rgba(245, 245, 245, 0.808);
  }
  .submit {
      text-align: center;
  }
</style>
