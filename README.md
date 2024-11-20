# React Testing Scenarios

This repository contains testing scenarios for React components, using **React Testing Library**. The tests cover various aspects of the components, including unit testing, integration testing, and UI testing.

## Test Summary

All the tests have passed successfully. Below is a detailed breakdown of the test scenarios.

| **NO** | **Test Scenario ID** | **Function/Test Scenario Name**        | **Test Category**    | **Pre-Condition**                              | **Test Case ID**    | **Steps**                                                                                                           | **Steps Description**                                                            | **Expected Result**                                                      | **Actual Result**                           | **Status** | **Notes**                                                                                  |
|--------|-----------------------|----------------------------------------|----------------------|------------------------------------------------|---------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|----------------------------------------------------------------------------|-------------------------------------------|------------|--------------------------------------------------------------------------------------------|
| 1      | TS06                 | Counter Initial Value                 | **React Testing (Unit Testing)** | Komponen `Counter` tersedia                   | TC01                | 1. Render komponen `Counter`.<br>2. Periksa nilai awal counter.                                                   | Nilai awal counter adalah `0`.                                                  | Nilai awal `0`                            | Nilai awal `0`                            | Pass       | Nilai awal counter sesuai dengan harapan.                                                 |
| 2      | TS06                 | Increment Counter                     | **React Testing (Unit Testing)** | Komponen `Counter` tersedia                   | TC02                | 1. Render komponen `Counter`.<br>2. Klik tombol `Increment`.                                                      | Nilai counter bertambah sebesar `1`.                                             | Nilai bertambah `1`                       | Nilai bertambah `1`                       | Pass       | Tombol increment bekerja dengan baik.                                                     |
| 3      | TS06                 | Decrement Counter                     | **React Testing (Unit Testing)** | Komponen `Counter` tersedia                   | TC03                | 1. Render komponen `Counter`.<br>2. Klik tombol `Decrement`.                                                      | Nilai counter berkurang sebesar `1`.                                             | Nilai berkurang `-1`                       | Nilai berkurang `-1`                       | Pass       | Tombol decrement bekerja dengan baik.                                                     |
| 4      | TS06                 | Reset Counter                         | **React Testing (Unit Testing)** | Komponen `Counter` tersedia                   | TC04                | 1. Render komponen `Counter`.<br>2. Klik tombol `Increment` beberapa kali.<br>3. Klik tombol `Reset`.              | Nilai counter kembali ke `0`.                                                    | Nilai kembali ke `0`                       | Nilai kembali ke `0`                       | Pass       | Tombol reset berfungsi dengan benar.                                                      |
| 5      | TS06                 | Greeting with Name                    | **React Testing (Unit Testing)** | Komponen `Greeting` tersedia                  | TC05                | 1. Render komponen `Greeting` dengan properti `name="John Doe"`.                                                  | Komponen menampilkan teks `Hello, John Doe`.                                     | Teks `Hello, John Doe` ditampilkan         | Teks `Hello, John Doe` ditampilkan         | Pass       | Greeting bekerja sesuai dengan nama yang diberikan.                                      |
| 6      | TS06                 | Greeting Empty Name                   | **React Testing (Unit Testing)** | Komponen `Greeting` tersedia                  | TC06                | 1. Render komponen `Greeting` dengan properti `name=""`.                                                           | Komponen menampilkan teks `Hello, `.                                             | Teks `Hello, ` ditampilkan                 | Teks `Hello, ` ditampilkan                 | Pass       | Properti kosong ditangani dengan baik.                                                    |
| 7      | TS06                 | Greeting Null or Undefined            | **React Testing (Unit Testing)** | Komponen `Greeting` tersedia                  | TC07                | 1. Render komponen `Greeting` dengan properti `name=null`.<br>2. Render dengan properti `name=undefined`.          | Komponen tetap menampilkan teks `Hello, `.                                       | Teks `Hello, ` ditampilkan                 | Teks `Hello, ` ditampilkan                 | Pass       | Properti `null` dan `undefined` ditangani dengan baik.                                   |
| 8      | TS06                 | Alert Button with Message             | **React Testing (UI Testing)** | Komponen `AlertButton` tersedia               | TC08                | 1. Render komponen `AlertButton` dengan properti `message="Test Alert"`.                                          | Ketika tombol diklik, alert muncul dengan teks `Test Alert`.                     | Alert muncul dengan teks `Test Alert`     | Alert muncul dengan teks `Test Alert`     | Pass       | Fungsi alert bekerja dengan baik untuk pesan valid.                                       |
| 9      | TS06                 | Alert Button with Empty Message       | **React Testing (UI Testing)** | Komponen `AlertButton` tersedia               | TC09                | 1. Render komponen `AlertButton` dengan properti `message=""`.                                                    | Ketika tombol diklik, alert muncul dengan teks kosong.                           | Alert muncul tanpa pesan                   | Alert muncul tanpa pesan                   | Pass       | Pesan kosong ditangani dengan baik.                                                      |
| 10     | TS06                 | Counter Increment-Decrement           | **React Testing (Integration Testing)** | Komponen `Counter` tersedia                   | TC10                | 1. Klik tombol `Increment` sebanyak 2 kali.<br>2. Klik tombol `Decrement` satu kali.                               | Nilai counter menjadi `1`.                                                       | Nilai counter `1`                           | Nilai counter `1`                           | Pass       | Increment dan decrement bekerja secara berurutan.                                         |
| 11     | TS06                 | Counter Tidak Dibawah Nol             | **React Testing (Unit Testing)** | Nilai awal counter `0`                        | TC11                | 1. Klik tombol `Decrement` beberapa kali.                                                                          | Nilai counter tetap `0` dan tidak negatif.                                        | Nilai counter tetap `0`                    | Nilai counter tetap `0`                    | Pass       | Pembatasan counter untuk tidak di bawah nol sesuai skenario uji.                         |
| 12     | TS06                 | Greeting dengan Special Characters    | **React Testing (Unit Testing)** | Komponen `Greeting` tersedia                  | TC12                | 1. Render komponen `Greeting` dengan properti `name="@#$%"`.                                                      | Komponen menampilkan teks `Hello, @#$%`.                                         | Teks `Hello, @#$%` ditampilkan             | Teks `Hello, @#$%` ditampilkan             | Pass       | Properti dengan karakter khusus ditangani dengan benar.                                 |
| 13     | TS06                 | Counter Maximum Value Handling        | **React Testing (Unit Testing)** | Nilai counter mencapai batas maksimum         | TC13                | 1. Klik tombol `Increment` beberapa kali hingga mencapai batas maksimum.                                          | Counter berhenti bertambah setelah mencapai nilai maksimum.                      | Nilai maksimum tercapai                    | Nilai maksimum tercapai                    | Pass       | Pembatasan maksimum berfungsi dengan baik.                                                |
| 14     | TS06                 | Alert Button with Long Message        | **React Testing (UI Testing)** | Komponen `AlertButton` tersedia               | TC14                | 1. Render komponen `AlertButton` dengan properti `message="Pesan sangat panjang..."`.                              | Alert muncul dengan pesan yang ditampilkan secara penuh.                         | Pesan panjang ditampilkan sepenuhnya      | Pesan panjang ditampilkan sepenuhnya      | Pass       | Pesan panjang dapat ditampilkan sepenuhnya.                                              |
| 15     | TS06                 | Counter Tidak Overflow                | **React Testing (Unit Testing)** | Komponen `Counter` tersedia                   | TC15                | 1. Klik tombol `Increment` hingga melewati batas representasi angka.                                              | Counter tidak mengalami overflow dan menampilkan nilai yang valid.               | Nilai valid tanpa overflow                  | Nilai valid tanpa overflow                  | Pass       | Overflow dicegah dengan baik.                                                           |
| 16     | TS06                 | Kombinasi Increment, Decrement, Reset | **React Testing (Integration Testing)** | Komponen `Counter` tersedia                   | TC16                | 1. Klik tombol `Increment` beberapa kali.<br>2. Klik tombol `Decrement`.<br>3. Klik tombol `Reset`.               | Counter kembali ke `0` setelah reset, meskipun telah dilakukan operasi lain.     | Nilai counter kembali ke `0`                | Nilai counter kembali ke `0`                | Pass       | Kombinasi operasi counter berfungsi dengan baik.                                         |

## Getting Started

To run the tests in this repository, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/react-testing.git
   cd react-testing