import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════════════
   MONTANA داخل المطعم — الأسعار الداخلية الحقيقية
══════════════════════════════════════════════════════════ */
const MENU = {

  /* ─── MONTANA داخل المطعم ─── */
  montana_inside: [
    // NORMALI PIZZAT
    {id:"mi_pz1",  cat:"🍕 Normali Pizzat", name:"Bolognese",        desc:"Jauheliha",                                                    price:12.00, popular:false},
    {id:"mi_pz2",  cat:"🍕 Normali Pizzat", name:"Americana",        desc:"Ananas, kinkku",                                               price:12.50, popular:false},
    {id:"mi_pz3",  cat:"🍕 Normali Pizzat", name:"Francescana",      desc:"Herkkusieni, kinkku",                                          price:12.50, popular:false},
    {id:"mi_pz4",  cat:"🍕 Normali Pizzat", name:"Vegetariana",      desc:"Ananas, herkkusieni, oliivi, paprika",                         price:14.50, popular:false},
    {id:"mi_pz5",  cat:"🍕 Normali Pizzat", name:"Tulinen",          desc:"Jalapeno, kebabliha, sipuli",                                  price:13.50, popular:false},
    {id:"mi_pz6",  cat:"🍕 Normali Pizzat", name:"Karhu",            desc:"Ananas, aurajuusto, kebabliha, majoneesi",                     price:14.50, popular:false},
    {id:"mi_pz7",  cat:"🍕 Normali Pizzat", name:"Frutti di Mare",   desc:"Katkarapu, simpukka, tonnikala",                               price:13.50, popular:false},
    {id:"mi_pz8",  cat:"🍕 Normali Pizzat", name:"Kulta",            desc:"Ananas, herkkusieni, katkarapu, kebabliha",                    price:14.50, popular:false},
    {id:"mi_pz9",  cat:"🍕 Normali Pizzat", name:"Special",          desc:"Ananas, aurajuusto, kinkku, salami",                           price:14.50, popular:false},
    {id:"mi_pz10", cat:"🍕 Normali Pizzat", name:"Opera Special",    desc:"Katkarapu, kinkku, salami, tonnikala",                         price:14.50, popular:false},
    {id:"mi_pz11", cat:"🍕 Normali Pizzat", name:"Quattro Stagione", desc:"Herkkusieni, katkarapu, kinkku, tonnikala",                    price:14.50, popular:false},
    {id:"mi_pz12", cat:"🍕 Normali Pizzat", name:"Samppalinna",      desc:"Katkarapu, kinkku, paprika, salami",                           price:14.50, popular:false},
    {id:"mi_pz13", cat:"🍕 Normali Pizzat", name:"Amore",            desc:"Aurajuusto, katkarapu, kinkku, tomaatti",                      price:14.50, popular:false},
    {id:"mi_pz14", cat:"🍕 Normali Pizzat", name:"Julia",            desc:"Ananas, jauheliha, kinkku, paprika",                           price:14.50, popular:false},
    {id:"mi_pz15", cat:"🍕 Normali Pizzat", name:"Al Capone",        desc:"Aurajuusto, jauheliha, paprika, salami, sipuli",               price:15.50, popular:false},
    {id:"mi_pz16", cat:"🍕 Normali Pizzat", name:"Hawaiji",          desc:"Ananas, aurajuusto, kinkku",                                   price:13.50, popular:false},
    {id:"mi_pz17", cat:"🍕 Normali Pizzat", name:"Kupittaa Kingi",   desc:"Aurajuusto, katkarapu, kebabliha, sipuli",                     price:14.50, popular:false},
    {id:"mi_pz18", cat:"🍕 Normali Pizzat", name:"Turku Classic",    desc:"Ananas, aurajuusto, kana",                                     price:13.50, popular:false},
    {id:"mi_pz19", cat:"🍕 Normali Pizzat", name:"Poliisi",          desc:"Aurajuusto, jalapeno, kana, sipuli",                           price:14.50, popular:false},
    {id:"mi_pz20", cat:"🍕 Normali Pizzat", name:"F18",              desc:"Feta, herkkusieni, kana, paprika",                             price:14.50, popular:false},
    {id:"mi_pz21", cat:"🍕 Normali Pizzat", name:"Itäranta",         desc:"Extrajuusto, katkarapu, kinkku, salami, sipuli, valkosipuli",  price:16.50, popular:false},
    {id:"mi_pz22", cat:"🍕 Normali Pizzat", name:"Skanssi BBQ",      desc:"BBQ-kastike, mozzarella, paahdettu broileri, pekoni, sipuli",  price:16.50, popular:true},
    {id:"mi_pz23", cat:"🍕 Normali Pizzat", name:"Martti Special",   desc:"Aurajuusto, kebabliha, kinkku, salami",                        price:14.50, popular:true},
    {id:"mi_pz24", cat:"🍕 Normali Pizzat", name:"NATO",             desc:"Kebabliha, pekoni, salami, sipuli",                            price:14.50, popular:false},
    {id:"mi_pz25", cat:"🍕 Normali Pizzat", name:"FBI",              desc:"Jalapeno, ananas, pepperonimakkara, valkosipuli",              price:14.50, popular:false},
    {id:"mi_pz26", cat:"🍕 Normali Pizzat", name:"Aurapuisto",       desc:"Ananas, aurajuusto, katkarapu, salami",                        price:14.50, popular:false},
    {id:"mi_pz27", cat:"🍕 Normali Pizzat", name:"Ylioppilas",       desc:"Ananas, katkarapu, kinkku, tonnikala",                         price:14.50, popular:false},
    {id:"mi_pz28", cat:"🍕 Normali Pizzat", name:"Turun Taivas",     desc:"Katkarapu, ananas, mozzarella, valkosipuliöljy",               price:14.50, popular:false},
    {id:"mi_pz29", cat:"🍕 Normali Pizzat", name:"Ruissalo Veggie",  desc:"Feta, oliivi, tomaatti, rucola, pesto",                        price:14.50, popular:false},
    {id:"mi_pz30", cat:"🍕 Normali Pizzat", name:"Habibi",           desc:"Ananas, aurajuusto, katkarapu, kinkku, salami",                price:15.50, popular:false},
    {id:"mi_pz31", cat:"🍕 Normali Pizzat", name:"Hirvensalo",       desc:"Aurajuusto, kinkku, pekoni, salami, sipuli",                   price:15.50, popular:false},
    {id:"mi_pz32", cat:"🍕 Normali Pizzat", name:"Kirkkosilta",      desc:"Jauheliha, kebabliha, kinkku, salami, tonnikala",              price:15.50, popular:false},
    {id:"mi_pz33", cat:"🍕 Normali Pizzat", name:"Ilpoisten Ilo",    desc:"Kebabliha, kana, feta, ranskalaiset, majoneesi",               price:14.50, popular:false},
    {id:"mi_pz34", cat:"🍕 Normali Pizzat", name:"Satavan Herkku",   desc:"Jalapeno, sipuli, kana döner, tuore tomaatti",                 price:15.50, popular:false},
    {id:"mi_pz35", cat:"🍕 Normali Pizzat", name:"Fantasia 2",       desc:"2 täytettä valintasi mukaan",                                  price:13.00, popular:false},
    {id:"mi_pz36", cat:"🍕 Normali Pizzat", name:"Fantasia 3",       desc:"3 täytettä valintasi mukaan",                                  price:14.00, popular:false},
    {id:"mi_pz37", cat:"🍕 Normali Pizzat", name:"Fantasia 4",       desc:"4 täytettä valintasi mukaan",                                  price:15.00, popular:true},
    // MODERNIT PIZZAT داخل
    {id:"mi_mz1", cat:"✨ Modernit Pizzat", name:"Margherita",   desc:"Tomaattikastike, bufala mozzarella, tuore rucola",                                          price:15.00, popular:false},
    {id:"mi_mz2", cat:"✨ Modernit Pizzat", name:"Gamberi",      desc:"Tomaattikastike, bufala mozzarella, sitruunamarinoituja katkarapuja, rucola",               price:15.00, popular:false},
    {id:"mi_mz3", cat:"✨ Modernit Pizzat", name:"Parma Rucola", desc:"Tomaattikastike, parmankinkku, rucola, kirsikkatomaatti, parmesaani, valkosipuliöljy",      price:15.00, popular:false},
    {id:"mi_mz4", cat:"✨ Modernit Pizzat", name:"Pollo",        desc:"Tomaattikastike, paahdettu broileri, pikkelöity punasipuli, BBQ, aioli, rucola",            price:15.00, popular:false},
    {id:"mi_mz5", cat:"✨ Modernit Pizzat", name:"Calabrese",    desc:"Tomaattikastike, mausteinen nduja makkara, bufala mozzarella, valkosipuliöljy, rucola",     price:15.00, popular:false},
    // PERHEPIZZAT داخل
    {id:"mi_pp1", cat:"👨‍👩‍👧‍👦 Perhepizzat", name:"Kaikki Perhepizzat", desc:"Kaikki normaalit pizzat perhepizzana — tupla kebabliha/kanadönner +5,50€", price:25.00, popular:false},
    // BURGERIT داخل — 18,50€ kaikki sis. 0,33l juoma
    {id:"mi_b1", cat:"🍔 Burgerit", name:"Montana Burger",  desc:"Briossisämpylä, naudanlihapihvi 180g, cheddar, marinoitu punasipuli, salaatti, tomaatti, aioli + maalaisranskalaiset. Sis. juoma.", price:18.50, popular:true},
    {id:"mi_b2", cat:"🍔 Burgerit", name:"Halloumi Burger", desc:"Briossisämpylä, friteerattu halloumi, marinoitu punasipuli, salaatti, tomaatti, basilikamajoneesi + maalaisranskalaiset. Sis. juoma.", price:18.50, popular:false},
    {id:"mi_b3", cat:"🍔 Burgerit", name:"Kanaburger",      desc:"Briossisämpylä, friteerattu kana, marinoitu kurkku ja punasipuli, salaatti, teriyaki-majoneesi + maalaisranskalaiset. Sis. juoma.", price:18.50, popular:false},
    {id:"mi_b4", cat:"🍔 Burgerit", name:"Juustoburger",    desc:"Briossisämpylä, naudanlihapihvi 180g, tuplajuusto, hillottu sipuli, suolakurkku, kurkkumajoneesi + maalaisranskalaiset. Sis. juoma.", price:18.50, popular:false},
    {id:"mi_b5", cat:"🍔 Burgerit", name:"La Brutal BBQ",   desc:"Briossisämpylä, naudanlihapihvi 180g, cheddarkastike, paahdettu sipuli, pekoni, BBQ-kastike + maalaisranskalaiset. Sis. juoma.", price:18.50, popular:true},
    // PASTAT داخل — 16,50€ kaikki sis. 0,33l juoma
    {id:"mi_pa1", cat:"🍝 Pastat", name:"Tagliatelle al Salmone", desc:"Valkosipulikerma, savulohi, kurkku, marinoitu punasipuli, parmesaani, rucola. Sis. juoma.",           price:16.50, popular:false},
    {id:"mi_pa2", cat:"🍝 Pastat", name:"Gamberétti",             desc:"Valkosipulikerma, katkaravut, chili, parmesaani, rucola. Sis. juoma.",                               price:16.50, popular:false},
    {id:"mi_pa3", cat:"🍝 Pastat", name:"Alfredo",                desc:"Valkosipulikerma, kananrinta, marinoitu punasipuli, kirsikkatomaatti, parmesaani, rucola. Sis. juoma.", price:16.50, popular:false},
    {id:"mi_pa4", cat:"🍝 Pastat", name:"Con Pesto di Feta",      desc:"Pesto, feta, kirsikkatomaatti, marinoitu punasipuli, parmesaani, rucola. Sis. juoma.",               price:16.50, popular:false},
    {id:"mi_pa5", cat:"🍝 Pastat", name:"Mozzarella Pasta",       desc:"Pesto, mozzarella, kirsikkatomaatti, parmesaani, rucola. Sis. juoma.",                               price:16.50, popular:false},
    {id:"mi_pa6", cat:"🍝 Pastat", name:"Punainen Pesto Pasta",   desc:"Friteerattu kana, punasipuli, rucola, parmesaani. Sis. juoma.",                                      price:16.50, popular:true},
    // MIX داخل sis. 0,33l juoma
    {id:"mi_mx1", cat:"🍱 Mix", name:"Lehtipihvi",            desc:"2 possun ulkofileepihvi, grillikasvikset + maalaisranskalaiset. Sis. juoma.",                                                      price:20.00, popular:false},
    {id:"mi_mx2", cat:"🍱 Mix", name:"Kana Bowl",             desc:"Friteerattu kana, riisi, soijakastike, marinoitu kurkku, porkkana, soijapapu, marinoitu mango, seesami, teriyaki-majoneesi. Sis. juoma.", price:18.00, popular:true},
    {id:"mi_mx3", cat:"🍱 Mix", name:"Parmesan & Basil",      desc:"Ranskalaiset, parmesaani, basilikamajoneesi, rucola.",                                                    price:10.00, popular:false},
    {id:"mi_mx4", cat:"🍱 Mix", name:"Jumeirah",              desc:"Ranskalaiset, valkosipulimajoneesi, ketsuppi, feta, paahdettu sipuli, rucola.",                          price:10.00, popular:false},
    // SALAATIT داخل sis. 0,33l juoma
    {id:"mi_sl1", cat:"🥗 Salaatit", name:"Kana-Caesarsalaatti",  desc:"Pariloitu kana, caesar-kastike, parmesaani, krutonki, kirsikkatomaatti. Sis. juoma.",                price:15.00, popular:false},
    {id:"mi_sl2", cat:"🥗 Salaatit", name:"Rapu-Caesarsalaatti",  desc:"Caesar-kastike, parmesaani, krutonki, kirsikkatomaatti. Sis. juoma.",                                price:15.00, popular:false},
    {id:"mi_sl3", cat:"🥗 Salaatit", name:"Halloumi-Salaatti",    desc:"Friteerattu halloumi, marinoitu punasipuli, kurkku, kirsikkatomaatti, basilikamajoneesi. Sis. juoma.", price:15.00, popular:false},
    {id:"mi_sl4", cat:"🥗 Salaatit", name:"Vuohenjuustosalaatti", desc:"Paahdettu vuohenjuusto, hunaja, pähkinä, kirsikkatomaatti, kurkku, oliivi, marinoitu punasipuli, basilikamajoneesi. Sis. juoma.", price:15.00, popular:false},
    // KEBABIT داخل
    {id:"mi_kb1",  cat:"🥙 Kebabit", name:"Kebab Pitaleipä",           desc:"",                                        price:12.00, popular:false},
    {id:"mi_kb2",  cat:"🥙 Kebabit", name:"Kebab Salaatti",            desc:"",                                        price:12.00, popular:false},
    {id:"mi_kb3",  cat:"🥙 Kebabit", name:"Kebab Ranskalaisilla",      desc:"",                                        price:13.50, popular:true},
    {id:"mi_kb4",  cat:"🥙 Kebabit", name:"Kebab Riisillä",            desc:"",                                        price:13.50, popular:false},
    {id:"mi_kb5",  cat:"🥙 Kebabit", name:"Kebab Lohkoperunoilla",     desc:"",                                        price:13.50, popular:false},
    {id:"mi_kb6",  cat:"🥙 Kebabit", name:"Kebab Kermaperunoilla",     desc:"",                                        price:13.50, popular:false},
    {id:"mi_kb7",  cat:"🥙 Kebabit", name:"Iskender Kebab",            desc:"",                                        price:13.50, popular:false},
    {id:"mi_kb8",  cat:"🥙 Kebabit", name:"Kebab Ristikkoperunoilla",  desc:"",                                        price:14.50, popular:false},
    {id:"mi_kb9",  cat:"🥙 Kebabit", name:"Kebab Bataattiperuna",      desc:"",                                        price:14.50, popular:false},
    {id:"mi_kb10", cat:"🥙 Kebabit", name:"Kebab Erikoinen",           desc:"Kebab, riisi, ranskalaiset, salaatti",    price:15.00, popular:false},
    {id:"mi_kb11", cat:"🥙 Kebabit", name:"Kebab Special",             desc:"Kebab, kanakebab, ranskalaiset",          price:15.00, popular:false},
    // RULLAT داخل
    {id:"mi_rk1",  cat:"🌯 Rullakebabit", name:"Rullakebab",                    desc:"", price:13.50, popular:false},
    {id:"mi_rk2",  cat:"🌯 Rullakebabit", name:"Rullakebab Juustolla",          desc:"", price:14.50, popular:true},
    {id:"mi_rk3",  cat:"🌯 Rullakebabit", name:"Rullakebab Aurajuustolla",      desc:"", price:14.50, popular:true},
    {id:"mi_rk4",  cat:"🌯 Rullakebabit", name:"Rullakebab Fetajuustolla",      desc:"", price:14.50, popular:false},
    {id:"mi_rk5",  cat:"🌯 Rullakebabit", name:"Rullakebab Mozzarellajuustolla",desc:"", price:14.50, popular:false},
    {id:"mi_rk6",  cat:"🌯 Rullakebabit", name:"Rullakebab Cheddarjuustolla",   desc:"", price:14.50, popular:false},
    {id:"mi_rk7",  cat:"🌯 Rullakebabit", name:"Rullakebab Ranskalaisilla",     desc:"", price:15.00, popular:false},
    {id:"mi_rk8",  cat:"🌯 Rullakebabit", name:"Kana Kebabrulla Ranskalaisilla",desc:"", price:16.50, popular:false},
    // HOT WINGS داخل
    {id:"mi_hw1",  cat:"🔥 Hot Wings", name:"Hot Wings 10 kpl", desc:"Sis. ranska tai riisi + 0,33l juoma", price:13.00, popular:false},
    {id:"mi_hw2",  cat:"🔥 Hot Wings", name:"Hot Wings 16 kpl", desc:"Sis. ranska tai riisi + 0,33l juoma", price:15.00, popular:false},
    {id:"mi_hw3",  cat:"🔥 Hot Wings", name:"Hot Wings 20 kpl", desc:"Sis. ranska tai riisi + 0,33l juoma", price:18.00, popular:false},
    {id:"mi_hw4",  cat:"🔥 Hot Wings", name:"Hot Wings 25 kpl", desc:"Sis. ranska tai riisi + 0,33l juoma", price:22.50, popular:false},
    {id:"mi_hw5",  cat:"🔥 Hot Wings", name:"Makkaraperunat",   desc:"Makkara, ranskalaiset, kurkkusalaatti, valkosipulimajoneesi", price:13.00, popular:false},
    {id:"mi_hw6",  cat:"🔥 Hot Wings", name:"Kanakori",         desc:"Sis. ranska tai riisi + juoma",       price:13.50, popular:false},
    {id:"mi_hw7",  cat:"🔥 Hot Wings", name:"Kananugetit 10",   desc:"",                                    price:13.00, popular:false},
    // JUOMAT داخل
    {id:"mi_jm1",  cat:"🥤 Juomat", name:"Coca-Cola 0,33L",          desc:"", price:2.20, popular:false},
    {id:"mi_jm2",  cat:"🥤 Juomat", name:"Coca-Cola Zero 0,33L",     desc:"", price:2.20, popular:false},
    {id:"mi_jm3",  cat:"🥤 Juomat", name:"Fanta Zero 0,33L",         desc:"", price:2.20, popular:false},
    {id:"mi_jm4",  cat:"🥤 Juomat", name:"Coca-Cola 0,5L",           desc:"", price:4.00, popular:false},
    {id:"mi_jm5",  cat:"🥤 Juomat", name:"Coca-Cola Zero 0,5L",      desc:"", price:4.00, popular:false},
    {id:"mi_jm6",  cat:"🥤 Juomat", name:"Fanta 0,5L",               desc:"", price:4.00, popular:false},
    {id:"mi_jm7",  cat:"🥤 Juomat", name:"Sprite 0,5L",              desc:"", price:4.00, popular:false},
    {id:"mi_jm8",  cat:"🥤 Juomat", name:"Dr Pepper Original 0,5L",  desc:"", price:4.00, popular:false},
    {id:"mi_jm9",  cat:"🥤 Juomat", name:"Muumi Metsämansikka 0,5L", desc:"", price:4.00, popular:false},
    {id:"mi_jm10", cat:"🥤 Juomat", name:"Coca-Cola 1,5L",           desc:"", price:6.00, popular:false},
    {id:"mi_jm11", cat:"🥤 Juomat", name:"Coca-Cola Zero 1,5L",      desc:"", price:6.00, popular:false},
    {id:"mi_jm12", cat:"🥤 Juomat", name:"Fanta 1,5L",               desc:"", price:6.00, popular:false},
  ],

  /* ─── MONTANA WOLT ─── */
  montana_wolt: [
    // BURGERIT
    {id:"mw_b1", cat:"🍔 Burgerit", name:"Montana Burger",   desc:"180g naudanlihapihvi, cheddar, punasipuli, salaatti, tomaatti, aioli + ranskalaiset. Sis. juoma.", price:18.50, popular:true},
    {id:"mw_b2", cat:"🍔 Burgerit", name:"Halloumi Burger",  desc:"Friteerattu halloumi, punasipuli, salaatti, tomaatti, basilikamajoneesi + ranskalaiset. Sis. juoma.", price:18.50, popular:true},
    {id:"mw_b3", cat:"🍔 Burgerit", name:"Kanaburger",       desc:"Friteerattu kana, kurkku, punasipuli, teriyaki-majoneesi + ranskalaiset. Sis. juoma.", price:18.50, popular:false},
    {id:"mw_b4", cat:"🍔 Burgerit", name:"Juustoburger",     desc:"180g naudanlihapihvi, tuplajuusto, hillottu sipuli, suolakurkku, kurkkumajoneesi + ranskalaiset. Sis. juoma.", price:18.50, popular:false},
    {id:"mw_b5", cat:"🍔 Burgerit", name:"La Brutal BBQ",    desc:"180g naudanlihapihvi, cheddarkastike, paahdettu sipuli, pekoni, BBQ + ranskalaiset. Sis. juoma.", price:18.50, popular:false},
    // PASTAT
    {id:"mw_p1", cat:"🍝 Pastat", name:"Mustekala Pasta",        desc:"Valkosipulikerma, mustekala, rucola, parmesaani. Sis. juoma.",                                    price:17.50, popular:false},
    {id:"mw_p2", cat:"🍝 Pastat", name:"Punainen Pesto Pasta",   desc:"Friteerattu kana, punasipuli, rucola, parmesaani. Sis. juoma.",                                  price:16.50, popular:true},
    {id:"mw_p3", cat:"🍝 Pastat", name:"Alfredo",                desc:"Valkosipulikerma, kana, punasipuli, kirsikkatomaatti, parmesaani, rucola. Sis. juoma.",          price:16.50, popular:false},
    {id:"mw_p4", cat:"🍝 Pastat", name:"Gamberetti",             desc:"Valkosipulikerma, katkaravut, chili, parmesaani, rucola. Sis. juoma.",                           price:16.50, popular:false},
    {id:"mw_p5", cat:"🍝 Pastat", name:"Con Pesto di Feta",      desc:"Pesto, feta, kirsikkatomaatti, punasipuli, parmesaani, rucola. Sis. juoma.",                    price:16.50, popular:false},
    // PIZZAT WOLT
    {id:"mw_pz1",  cat:"🍕 Pizzat", name:"Bolognese",        desc:"Jauheliha",                                                   price:13.00, popular:false},
    {id:"mw_pz2",  cat:"🍕 Pizzat", name:"Americana",        desc:"Ananas, kinkku",                                              price:14.00, popular:false},
    {id:"mw_pz3",  cat:"🍕 Pizzat", name:"Francescana",      desc:"Herkkusieni, kinkku",                                         price:14.00, popular:false},
    {id:"mw_pz4",  cat:"🍕 Pizzat", name:"Vegetariana",      desc:"Ananas, herkkusieni, oliivi, paprika",                        price:15.50, popular:false},
    {id:"mw_pz5",  cat:"🍕 Pizzat", name:"Tulinen",          desc:"Jalapeno, kebabliha, sipuli",                                 price:15.00, popular:false},
    {id:"mw_pz6",  cat:"🍕 Pizzat", name:"Special",          desc:"Ananas, aurajuusto, kinkku, salami",                          price:15.50, popular:false},
    {id:"mw_pz7",  cat:"🍕 Pizzat", name:"Opera Special",    desc:"Katkarapu, kinkku, salami, tonnikala",                        price:15.50, popular:false},
    {id:"mw_pz8",  cat:"🍕 Pizzat", name:"Quattro Stagioni", desc:"Herkkusieni, katkarapu, kinkku, tonnikala",                   price:15.50, popular:false},
    {id:"mw_pz9",  cat:"🍕 Pizzat", name:"Martti Special",   desc:"Aurajuusto, kebabliha, kinkku, salami",                       price:15.50, popular:true},
    {id:"mw_pz10", cat:"🍕 Pizzat", name:"NATO",             desc:"Kebabliha, pekoni, salami, sipuli",                           price:15.50, popular:false},
    {id:"mw_pz11", cat:"🍕 Pizzat", name:"Fantasia 2",       desc:"2 täytettä valintasi mukaan",                                 price:14.00, popular:false},
    {id:"mw_pz12", cat:"🍕 Pizzat", name:"Fantasia 3",       desc:"3 täytettä valintasi mukaan",                                 price:15.00, popular:false},
    {id:"mw_pz13", cat:"🍕 Pizzat", name:"Fantasia 4",       desc:"4 täytettä valintasi mukaan",                                 price:15.50, popular:true},
    // PERHEPIZZAT WOLT
    {id:"mw_pp1", cat:"👨‍👩‍👧‍👦 Perhepizzat", name:"Perhepizzat (useimmat)", desc:"Useimmat pizzat perhepizzana", price:25.00, popular:false},
    // MODERNIT PIZZAT
    {id:"mw_mz1", cat:"✨ Modernit Pizzat", name:"Margherita",   desc:"Tomaattikastike, bufala-mozzarella, rucola",                              price:15.00, popular:false},
    {id:"mw_mz2", cat:"✨ Modernit Pizzat", name:"Gamberi",      desc:"Bufala-mozzarella, sitruunakatkaravut, rucola",                           price:15.00, popular:false},
    {id:"mw_mz3", cat:"✨ Modernit Pizzat", name:"Parma Rucola", desc:"Parmankinkku, rucola, kirsikkatomaatti, parmesaani, valkosipuliöljy",     price:15.00, popular:false},
    {id:"mw_mz4", cat:"✨ Modernit Pizzat", name:"Pollo",        desc:"Paahdettu broileri, punasipuli, BBQ, aioli, rucola",                      price:15.00, popular:false},
    {id:"mw_mz5", cat:"✨ Modernit Pizzat", name:"Calabrese",    desc:"Nduja-makkara, bufala-mozzarella, valkosipuliöljy, rucola",               price:15.00, popular:false},
    // KEBABIT WOLT
    {id:"mw_kb1", cat:"🥙 Kebabit", name:"Pitakebab",              desc:"", price:12.00, popular:false},
    {id:"mw_kb2", cat:"🥙 Kebabit", name:"Kebab Salaatilla",       desc:"", price:15.00, popular:false},
    {id:"mw_kb3", cat:"🥙 Kebabit", name:"Kebab Ranskalaisilla",   desc:"", price:16.00, popular:true},
    {id:"mw_kb4", cat:"🥙 Kebabit", name:"Kebab Riisillä",         desc:"", price:16.00, popular:false},
    {id:"mw_kb5", cat:"🥙 Kebabit", name:"Kebab Iskender",         desc:"", price:16.00, popular:false},
    {id:"mw_kb6", cat:"🥙 Kebabit", name:"Kebab Ristikkoperunoilla",desc:"",price:17.00, popular:false},
    // RULLAT WOLT
    {id:"mw_rk1", cat:"🌯 Rullakebabit", name:"Rullakebab",                    desc:"", price:16.00, popular:false},
    {id:"mw_rk2", cat:"🌯 Rullakebabit", name:"Rullakebab Juustolla",          desc:"", price:16.50, popular:true},
    {id:"mw_rk3", cat:"🌯 Rullakebabit", name:"Rullakebab Aurajuustolla",      desc:"", price:16.50, popular:true},
    {id:"mw_rk4", cat:"🌯 Rullakebabit", name:"Rullakebab Fetajuustolla",      desc:"", price:16.50, popular:false},
    {id:"mw_rk5", cat:"🌯 Rullakebabit", name:"Rullakebab Mozzarellajuustolla",desc:"", price:16.50, popular:false},
    // GRILLI WOLT
    {id:"mw_hw1", cat:"🔥 Grilli", name:"Hot Wings 10",   desc:"Sis. ranska tai riisi + juoma", price:14.00, popular:false},
    {id:"mw_hw2", cat:"🔥 Grilli", name:"Hot Wings 16",   desc:"Sis. ranska tai riisi + juoma", price:16.00, popular:false},
    {id:"mw_hw3", cat:"🔥 Grilli", name:"Hot Wings 20",   desc:"Sis. ranska tai riisi + juoma", price:20.00, popular:false},
    {id:"mw_hw4", cat:"🔥 Grilli", name:"Makkaraperunat", desc:"Makkara, ranskalaiset, kurkkusalaatti, kastikkeet", price:14.00, popular:false},
    {id:"mw_hw5", cat:"🔥 Grilli", name:"Kanakori",       desc:"Sis. ranska tai riisi + juoma", price:14.00, popular:false},
    {id:"mw_hw6", cat:"🔥 Grilli", name:"Kananugetit 10", desc:"",                              price:13.00, popular:false},
    // MIX WOLT
    {id:"mw_mx1", cat:"🍱 Mix", name:"Lehtipihvi",             desc:"2 possun ulkofileepihvi, grillikasvikset + ranskalaiset. Sis. juoma.", price:20.00, popular:false},
    {id:"mw_mx2", cat:"🍱 Mix", name:"Kana Bowl",              desc:"Friteerattu kana, riisi, soija, kurkku, porkkana, mango, seesami, teriyaki. Sis. juoma.", price:18.00, popular:false},
    {id:"mw_mx3", cat:"🍱 Mix", name:"Parmesan & Basil",       desc:"Ranskalaiset, parmesaani, basilikamajoneesi, rucola.",   price:10.00, popular:false},
    {id:"mw_mx4", cat:"🍱 Mix", name:"Jumeirah ranskalaiset",  desc:"Ranskalaiset, valkosipulimajoneesi, feta, sipuli, rucola.", price:10.00, popular:false},
    {id:"mw_mx5", cat:"🍱 Mix", name:"Fish & Chips",           desc:"Paneroitu kala, ranskalaiset, majoneesi. Sis. juoma.",   price:18.00, popular:false},
    // SALAATIT WOLT
    {id:"mw_sl1", cat:"🥗 Salaatit", name:"Kana-Caesarsalaatti",   desc:"Pariloitu kana, caesar, parmesaani, krutonki, tomaatti. Sis. juoma.", price:15.00, popular:false},
    {id:"mw_sl2", cat:"🥗 Salaatit", name:"Rapu-Caesarsalaatti",   desc:"Caesar, parmesaani, krutonki, tomaatti. Sis. juoma.",                price:15.00, popular:false},
    {id:"mw_sl3", cat:"🥗 Salaatit", name:"Halloumisalaatti",      desc:"Friteerattu halloumi, punasipuli, kurkku, tomaatti, basilikamajoneesi. Sis. juoma.", price:15.00, popular:false},
    {id:"mw_sl4", cat:"🥗 Salaatit", name:"Vuohenjuustosalaatti",  desc:"Paahdettu vuohenjuusto, hunaja, pähkinä, tomaatti, oliivi, punasipuli. Sis. juoma.", price:15.00, popular:false},
    // JUOMAT WOLT
    {id:"mw_jm1", cat:"🥤 Juomat", name:"Coca-Cola 0,33L",      desc:"", price:2.20, popular:false},
    {id:"mw_jm2", cat:"🥤 Juomat", name:"Coca-Cola Zero 0,33L", desc:"", price:2.20, popular:false},
    {id:"mw_jm3", cat:"🥤 Juomat", name:"Fanta Zero 0,33L",     desc:"", price:2.20, popular:false},
    {id:"mw_jm4", cat:"🥤 Juomat", name:"Coca-Cola 0,5L",       desc:"", price:4.00, popular:false},
    {id:"mw_jm5", cat:"🥤 Juomat", name:"Coca-Cola Zero 0,5L",  desc:"", price:4.00, popular:false},
    {id:"mw_jm6", cat:"🥤 Juomat", name:"Fanta 0,5L",           desc:"", price:4.00, popular:false},
    {id:"mw_jm7", cat:"🥤 Juomat", name:"Coca-Cola 1,5L",       desc:"", price:6.00, popular:false},
    {id:"mw_jm8", cat:"🥤 Juomat", name:"Coca-Cola Zero 1,5L",  desc:"", price:6.00, popular:false},
    {id:"mw_jm9", cat:"🥤 Juomat", name:"Fanta 1,5L",           desc:"", price:6.00, popular:false},
  ],

  /* ─── ROTANA WOLT ─── */
  rotana: [
    // FAMILY DEALS
    {id:"rot_fd1", cat:"👨‍👩‍👧‍👦 Family Deals", name:"Perhepaketti 1", desc:"1 Perhepizza (4 täytettä) + 1 Rullakebab + 1,5L juoma", price:39.90, popular:true},
    // KEBAB
    {id:"rot_kb1", cat:"🥙 Kebab-annokset", name:"Kebab-ateria",  desc:"Kebabliha, perunat ja kastike", price:16.90, popular:true},
    {id:"rot_kb2", cat:"🥙 Kebab-annokset", name:"Kebab Iskender",desc:"Lämmin leipäpohja, kebabliha, tomaattikastike, jogurttikastike", price:16.90, popular:false},
    // RULLAT
    {id:"rot_rk1", cat:"🌯 Kebab-rullat", name:"Kebab-rulla", desc:"Kebabliha tai kana-döner, salaatti, kastike", price:16.50, popular:true},
    // PIZZAT NORMAALI
    {id:"rot_pz1", cat:"🍕 Pizzat", name:"Bolognese",  desc:"Jauheliha",                                               price:14.90, popular:true},
    {id:"rot_pz2", cat:"🍕 Pizzat", name:"Americana",  desc:"Ananas, kinkku",                                          price:14.90, popular:false},
    {id:"rot_pz3", cat:"🍕 Pizzat", name:"Tulinen",    desc:"Jalapeno, kebabliha, sipuli",                             price:15.90, popular:false},
    {id:"rot_pz4", cat:"🍕 Pizzat", name:"Special",    desc:"Ananas, aurajuusto, kinkku, salami",                      price:15.90, popular:false},
    {id:"rot_pz5", cat:"🍕 Pizzat", name:"Hawaiji",    desc:"Ananas, aurajuusto, kinkku",                              price:15.90, popular:false},
    {id:"rot_pz6", cat:"🍕 Pizzat", name:"Kana BBQ",   desc:"BBQ-kastike, mozzarella, broileri, pekoni, sipuli",       price:16.90, popular:false},
    {id:"rot_pz7", cat:"🍕 Pizzat", name:"Fantasia 3", desc:"3 täytettä valintasi mukaan",                             price:15.90, popular:true},
    // PERHEPIZZAT
    {id:"rot_pp1", cat:"👨‍👩‍👧‍👦 Perhepizzat", name:"Bolognese Perhe",     desc:"Jauheliha",                                           price:24.90, popular:false},
    {id:"rot_pp2", cat:"👨‍👩‍👧‍👦 Perhepizzat", name:"Americana Perhe",     desc:"Ananas, kinkku",                                      price:25.90, popular:false},
    {id:"rot_pp3", cat:"👨‍👩‍👧‍👦 Perhepizzat", name:"Tulinen Perhe",       desc:"Jalapeno, kebabliha, sipuli",                         price:26.90, popular:false},
    {id:"rot_pp4", cat:"👨‍👩‍👧‍👦 Perhepizzat", name:"Frutti di Mare Perhe",desc:"Tonnikala, simpukka, katkarapu",                      price:26.90, popular:false},
    {id:"rot_pp5", cat:"👨‍👩‍👧‍👦 Perhepizzat", name:"Special Perhe",       desc:"Ananas, aurajuusto, kinkku, salami",                  price:25.90, popular:false},
    {id:"rot_pp6", cat:"👨‍👩‍👧‍👦 Perhepizzat", name:"Kana BBQ Perhe",      desc:"BBQ-kastike, mozzarella, broileri, pekoni, sipuli",   price:26.90, popular:false},
    {id:"rot_pp7", cat:"👨‍👩‍👧‍👦 Perhepizzat", name:"Fantasia 4 Perhe",    desc:"4 täytettä valintasi mukaan",                        price:26.90, popular:false},
    // MIX FOOD
    {id:"rot_mx1", cat:"🍱 Mix Food", name:"Hot Wings",        desc:"",                                                    price:13.00, popular:false},
    {id:"rot_mx2", cat:"🍱 Mix Food", name:"Makkaraperunat",   desc:"Makkaraa, ranskalaiset, kurkkusalaatti, kastikkeet",   price:14.50, popular:false},
    {id:"rot_mx3", cat:"🍱 Mix Food", name:"Kanakori",         desc:"",                                                    price:15.00, popular:false},
    {id:"rot_mx4", cat:"🍱 Mix Food", name:"Kananugetit 10",   desc:"",                                                    price:14.00, popular:false},
    {id:"rot_mx5", cat:"🍱 Mix Food", name:"Ranskalaiset",     desc:"",                                                    price:8.90,  popular:false},
    // JUOMAT
    {id:"rot_jm1", cat:"🥤 Juomat", name:"Coca-Cola 0,33L",      desc:"", price:2.20, popular:false},
    {id:"rot_jm2", cat:"🥤 Juomat", name:"Coca-Cola Zero 0,33L", desc:"", price:2.20, popular:false},
    {id:"rot_jm3", cat:"🥤 Juomat", name:"Fanta Zero 0,33L",     desc:"", price:2.20, popular:false},
    {id:"rot_jm4", cat:"🥤 Juomat", name:"Coca-Cola 0,5L",       desc:"", price:4.00, popular:false},
    {id:"rot_jm5", cat:"🥤 Juomat", name:"Coca-Cola Zero 0,5L",  desc:"", price:4.00, popular:false},
    {id:"rot_jm6", cat:"🥤 Juomat", name:"Fanta 0,5L",           desc:"", price:4.00, popular:false},
    {id:"rot_jm7", cat:"🥤 Juomat", name:"Sprite 0,5L",          desc:"", price:4.00, popular:false},
    {id:"rot_jm8", cat:"🥤 Juomat", name:"Muumi Metsämansikka",  desc:"", price:4.00, popular:false},
    {id:"rot_jm9", cat:"🥤 Juomat", name:"Dr Pepper 0,5L",       desc:"", price:4.00, popular:false},
    {id:"rot_jm10",cat:"🥤 Juomat", name:"Coca-Cola 1,5L",       desc:"", price:6.00, popular:false},
    {id:"rot_jm11",cat:"🥤 Juomat", name:"Fanta 1,5L",           desc:"", price:6.00, popular:false},
  ],

  /* ─── DUBAI WOLT ─── */
  dubai: [
    // PASTAT
    {id:"db_p1", cat:"🍝 Pasta", name:"Mustekala Pasta",       desc:"Valkosipulikerma, rucola, parmesaani",                   price:17.00, popular:false},
    {id:"db_p2", cat:"🍝 Pasta", name:"Punainen Pesto Pasta",  desc:"Friteerattu kana, punasipuli, rucola, parmesaani",       price:16.50, popular:true},
    {id:"db_p3", cat:"🍝 Pasta", name:"Gamberétti",            desc:"Katkarapu, chili, parmesaani",                           price:16.00, popular:true},
    {id:"db_p4", cat:"🍝 Pasta", name:"Alfredo",               desc:"Kananrinta, valkosipulikerma",                           price:16.00, popular:true},
    {id:"db_p5", cat:"🍝 Pasta", name:"Con Pesto di Feta",     desc:"Pesto, feta, kirsikkatomaatti",                          price:16.00, popular:false},
    // BURGERIT
    {id:"db_b1", cat:"🍔 Burgerit", name:"LA Original Steakburger", desc:"180g naudanlihapihvi, cheddar, salaatti",           price:17.50, popular:false},
    {id:"db_b2", cat:"🍔 Burgerit", name:"LA Brutal BBQ",           desc:"180g naudanlihapihvi, pekoni, BBQ kastike",         price:17.50, popular:true},
    {id:"db_b3", cat:"🍔 Burgerit", name:"LA Red Mountain Burger",  desc:"Cheddar, jalapeno, gochujang majoneesi",            price:17.50, popular:false},
    // KEBAB
    {id:"db_kb1", cat:"🥙 Kebab", name:"Kebab Ranskalaisilla",    desc:"", price:15.50, popular:true},
    {id:"db_kb2", cat:"🥙 Kebab", name:"Kebab Salaatilla",        desc:"", price:15.00, popular:false},
    {id:"db_kb3", cat:"🥙 Kebab", name:"Kebab Lohkoperunoilla",   desc:"", price:16.00, popular:false},
    {id:"db_kb4", cat:"🥙 Kebab", name:"Kebab Ristikkoperunoilla",desc:"", price:16.50, popular:false},
    {id:"db_kb5", cat:"🥙 Kebab", name:"Kebab Riisillä",          desc:"", price:15.50, popular:false},
    {id:"db_kb6", cat:"🥙 Kebab", name:"Iskender",                desc:"", price:15.50, popular:false},
    {id:"db_kb7", cat:"🥙 Kebab", name:"Special Kebab",           desc:"Ranskalaiset ja riisi", price:16.50, popular:false},
    // RULLA
    {id:"db_rk1", cat:"🌯 Rulla", name:"Rullakebab",  desc:"", price:15.50, popular:true},
    {id:"db_rk2", cat:"🌯 Rulla", name:"Aura Rulla",  desc:"", price:16.00, popular:false},
    {id:"db_rk3", cat:"🌯 Rulla", name:"Feta Rulla",  desc:"", price:16.00, popular:true},
    {id:"db_rk4", cat:"🌯 Rulla", name:"Juusto Rulla",desc:"", price:16.00, popular:false},
    // SALAATTI
    {id:"db_sl1", cat:"🥗 Salaatti", name:"Kana Caesar Salaatti", desc:"", price:15.00, popular:false},
    {id:"db_sl2", cat:"🥗 Salaatti", name:"Halloumi Salaatti",    desc:"", price:15.00, popular:false},
    // STREET FOOD
    {id:"db_sf1", cat:"🍟 Street Food", name:"Makkaraperunat",          desc:"",                                price:13.50, popular:true},
    {id:"db_sf2", cat:"🍟 Street Food", name:"Fish & Chips",            desc:"",                                price:16.00, popular:false},
    {id:"db_sf3", cat:"🍟 Street Food", name:"Chicken & Chips",         desc:"",                                price:16.00, popular:false},
    {id:"db_sf4", cat:"🍟 Street Food", name:"Chicken Wings",           desc:"",                                price:11.50, popular:false},
    {id:"db_sf5", cat:"🍟 Street Food", name:"Nugetti Ateria",          desc:"",                                price:13.00, popular:false},
    {id:"db_sf6", cat:"🍟 Street Food", name:"Parmesan & Basil",        desc:"Ranskalaiset, parmesaani, basilikamajoneesi", price:10.00, popular:false},
    {id:"db_sf7", cat:"🍟 Street Food", name:"Dubai Delight",           desc:"Ranskalaiset, Dubai-kastike",     price:10.00, popular:false},
    {id:"db_sf8", cat:"🍟 Street Food", name:"Jumeirah ranskalaiset",   desc:"Ranskalaiset, valkosipulimajoneesi, feta, sipuli", price:10.00, popular:false},
    {id:"db_sf9", cat:"🍟 Street Food", name:"Lehtipihvi",              desc:"2 possun ulkofileepihvi, grillikasvikset", price:18.50, popular:false},
    // OMA VALINTA
    {id:"db_ov1", cat:"🍕 Oma Valinta", name:"Dubai Pizza Omavalinta", desc:"Oma täyteyhdistelmä", price:12.00, popular:false},
    // JUOMAT
    {id:"db_jm1", cat:"🥤 Juomat", name:"Coca-Cola 0,33L",      desc:"", price:2.20, popular:false},
    {id:"db_jm2", cat:"🥤 Juomat", name:"Coca-Cola Zero 0,33L", desc:"", price:2.20, popular:false},
    {id:"db_jm3", cat:"🥤 Juomat", name:"Fanta Zero 0,33L",     desc:"", price:2.20, popular:false},
    {id:"db_jm4", cat:"🥤 Juomat", name:"Coca-Cola 0,5L",       desc:"", price:4.00, popular:false},
    {id:"db_jm5", cat:"🥤 Juomat", name:"Coca-Cola Zero 0,5L",  desc:"", price:4.00, popular:false},
    {id:"db_jm6", cat:"🥤 Juomat", name:"Sprite 0,5L",          desc:"", price:4.00, popular:false},
    {id:"db_jm7", cat:"🥤 Juomat", name:"Muumi Metsämansikka",  desc:"", price:4.00, popular:false},
    {id:"db_jm8", cat:"🥤 Juomat", name:"Coca-Cola 1,5L",       desc:"", price:5.50, popular:false},
    {id:"db_jm9", cat:"🥤 Juomat", name:"Coca-Cola Zero 1,5L",  desc:"", price:5.50, popular:false},
  ],
};

const RESTS = {
  montana_inside:{ name:"Montana داخل المطعم", emoji:"🍽️", color:"#e8a020", type:"inside", shortName:"Montana (داخلي)" },
  montana_wolt:  { name:"Montana Wolt",         emoji:"🛵", color:"#f97316", type:"wolt",   shortName:"Montana (Wolt)" },
  rotana:        { name:"Rotana Restaurant",    emoji:"🍕", color:"#7c6ff7", type:"wolt",   shortName:"Rotana" },
  dubai:         { name:"Dubai",                emoji:"🥙", color:"#22c98a", type:"wolt",   shortName:"Dubai" },
};

const WEEKLY = {
  montana_inside:[620,780,650,910,1050,880,710],
  montana_wolt:  [1240,1580,1320,1840,2100,1760,1420],
  rotana:        [620,810,740,920,1050,890,710],
  dubai:         [410,530,490,680,750,620,510],
};
const DAYS = ["Ma","Ti","Ke","To","Pe","La","Su"];

const T = {
  fi:{
    appName:"Montana AI", dashboard:"Kojelauta", pos:"Kassa",
    analytics:"Analytiikka", assistant:"AI-assistentti", content:"Sisältö",
    settings:"Asetukset", groupOverview:"Ryhmän yhteenveto",
    todaySales:"Päivän myynti", todayCustomers:"Asiakkaat tänään",
    woltOrders:"Wolt-tilaukset", inHouseOrders:"Sisäiset tilaukset",
    avgOrder:"Keskitilaus", newOrder:"Uusi tilaus",
    orderTotal:"Tilauksen summa", printReceipt:"Tulosta kuitti",
    printKitchen:"Tulosta keittiölle", cash:"Käteinen", card:"Kortti",
    mobilePay:"MobilePay", completeSale:"Viimeistele myynti",
    clearOrder:"Tyhjennä", noItems:"Tyhjä", orderSuccess:"Myynti valmis!",
    newSale:"Uusi myynti", search:"Etsi...", tableNum:"Pöytä",
    generating:"Ajatellaan...", send:"Lähetä",
    typeMessage:"Kirjoita kysymys...", logout:"Kirjaudu ulos",
    login:"Kirjaudu sisään", email:"Sähköposti", password:"Salasana",
    total:"Yhteensä", thisWeek:"Tällä viikolla",
    salesComparison:"Myyntivertailu", weeklySales:"Viikkomyynti",
    combinedSales:"Yhteismyynti", allRestaurants:"Kaikki ravintolat",
    switchRestaurant:"Vaihda ravintola",
    popularItems:"Tilatuimmat", internalSales:"Sisäinen myynti",
  },
  ar:{
    appName:"Montana AI", dashboard:"لوحة التحكم", pos:"الكاشير",
    analytics:"التحليلات", assistant:"المساعد الذكي", content:"المحتوى",
    settings:"الإعدادات", groupOverview:"نظرة على المجموعة",
    todaySales:"مبيعات اليوم", todayCustomers:"زبائن اليوم",
    woltOrders:"طلبات Wolt", inHouseOrders:"طلبات داخلية",
    avgOrder:"متوسط الطلب", newOrder:"طلب جديد",
    orderTotal:"إجمالي الطلب", printReceipt:"طباعة فاتورة",
    printKitchen:"طباعة مطبخ", cash:"نقداً", card:"بطاقة",
    mobilePay:"Mobile Pay", completeSale:"إتمام البيع",
    clearOrder:"مسح", noItems:"السلة فارغة", orderSuccess:"تم البيع!",
    newSale:"بيع جديد", search:"بحث...", tableNum:"طاولة",
    generating:"جاري التفكير...", send:"إرسال",
    typeMessage:"اكتب سؤالك...", logout:"تسجيل خروج",
    login:"تسجيل الدخول", email:"البريد الإلكتروني", password:"كلمة المرور",
    total:"الإجمالي", thisWeek:"هذا الأسبوع",
    salesComparison:"مقارنة المبيعات", weeklySales:"المبيعات الأسبوعية",
    combinedSales:"مبيعات مجمعة", allRestaurants:"كل المطاعم",
    switchRestaurant:"تبديل المطعم",
    popularItems:"الأكثر طلباً", internalSales:"مبيعات داخلية",
  },
};

const callAI = async (prompt) => {
  const system = `أنت Montana AI — المساعد الذكي لمطاعم Montana وRotana وDubai في توركو، فنلندا.
معلومات: Tommilankatu 1, 20300 Turku | 044 246 6447 | makumatka.nordic@gmail.com
Instagram: @townravintolatoy | TikTok: @montanaristorante | Wolt: 9.6/10
المالك يعمل وحده 7 أيام/أسبوع. ردود قصيرة وعملية. تحدث بلغة السؤال.`;
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, system }),
    });
    const data = await res.json();
    return data.text || "خطأ";
  } catch { return "تعذر الاتصال بالسيرفر. تأكد أن server.js شغال."; }
};

const doPrint = (lines) => {
  const w = window.open("","_blank","width=320,height=500");
  if(!w) return;
  w.document.write(`<pre style="font-family:'Courier New',monospace;font-size:13px;padding:12px;line-height:1.5;">${lines.join("\n")}</pre>`);
  w.document.close(); w.focus();
  setTimeout(()=>{ w.print(); setTimeout(()=>w.close(),800); },300);
};

const printReceipt = (order, restId) => {
  const restName = restId === "montana_inside" || restId === "montana_wolt" ? "Montana Ristorante" : restId === "rotana" ? "Rotana Restaurant" : "Dubai Restaurant";
  const payLabel = order.payment==="cash"?"Käteinen":order.payment==="card"?"Korttimaksu":"MobilePay";
  doPrint([
    "================================",
    "      TOWN RAVINTOLAT OY",
    `       ${restName}`,
    "  Tommilankatu 1, 20300 Turku",
    "       Puh: 044 2466447",
    "    Y-tunnus: 3568909-8",
    " makumatka.nordic@gmail.com",
    "================================",
    `  Kuitti nro:  #${order.num}`,
    `  Pvm: ${new Date().toLocaleString("fi-FI")}`,
    `  Pöytä: ${order.table||"-"}`,
    "--------------------------------",
    ...order.items.map(i=>`  ${String(i.qty)+"x"} ${i.name.substring(0,18).padEnd(18)} ${(i.price*i.qty).toFixed(2)} EUR`),
    "--------------------------------",
    `  Veroton hinta:  ${(order.total/1.135).toFixed(2)} EUR`,
    `  ALV 13,5%:        ${(order.total*0.135/1.135).toFixed(2)} EUR`,
    `  YHTEENSÄ:       ${order.total.toFixed(2)} EUR`,
    "--------------------------------",
    `  Maksutapa: ${payLabel}`,
    "================================",
    "     Kiitos käynnistäsi!",
    "   Tervetuloa uudelleen!",
    "================================",
    "","",
  ]);
};

const printKitchen = (order) => {
  doPrint([
    "====== KEITTIÖTILAUS ======",
    `Tilaus #${order.num}`,
    `Aika: ${new Date().toLocaleTimeString("fi-FI")}`,
    `Pöytä: ${order.table||"-"}`,
    "--------------------------",
    ...order.items.map(i=>`  ${i.qty}x  ${i.name}`),
    order.note?`--------------------------\nHUOM: ${order.note}`:"",
    "==========================","","",
  ]);
};

export default function MontanaAI() {
  const [lang, setLang] = useState("fi");
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeRest, setActiveRest] = useState(null);
  const [screen, setScreen] = useState("group");
  const [cart, setCart] = useState([]);
  const [orderNum, setOrderNum] = useState(1001);
  const [payMethod, setPayMethod] = useState("card");
  const [tableNum, setTableNum] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [saleComplete, setSaleComplete] = useState(null);
  const [catFilter, setCatFilter] = useState("all");
  const [searchQ, setSearchQ] = useState("");
  const [notif, setNotif] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [chatMsgs, setChatMsgs] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [quickKey, setQuickKey] = useState(null);
  const [salesHistory, setSalesHistory] = useState([]);
  const [woltSales, setWoltSales] = useState(() => {
    const today = new Date().toISOString().split('T')[0];
    return { date: today, sali: "", sali_kpl: "", montana_wolt: "", mw_kpl: "", rotana: "", rot_kpl: "", dubai: "", dub_kpl: "" };
  });
  const [serverSynced, setServerSynced] = useState(false);
  const [woltHistory, setWoltHistory] = useState(() => {
    try {
      const saved = localStorage.getItem("montana_wolt_history");
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return [
      {date:"2026-03-10", sali:"13",    sali_kpl:"1",  montana_wolt:"137.24", mw_kpl:"9",  rotana:"15.21",  rot_kpl:"1", dubai:"13.66",  dub_kpl:"1"},
      {date:"2026-03-09", sali:"40",    sali_kpl:"1",  montana_wolt:"145.88", mw_kpl:"9",  rotana:"62.97",  rot_kpl:"4", dubai:"147.88", dub_kpl:"8"},
      {date:"2026-03-08", sali:"221.5", sali_kpl:"10", montana_wolt:"264.90", mw_kpl:"12", rotana:"87.44",  rot_kpl:"6", dubai:"185.34", dub_kpl:"9"},
      {date:"2026-03-07", sali:"59",    sali_kpl:"3",  montana_wolt:"198.88", mw_kpl:"10", rotana:"163.90", rot_kpl:"9", dubai:"86.65",  dub_kpl:"5"},
      {date:"2026-03-06", sali:"81.50", sali_kpl:"3",  montana_wolt:"271.60", mw_kpl:"14", rotana:"93.31",  rot_kpl:"5", dubai:"46.28",  dub_kpl:"3"},
      {date:"2026-03-05", sali:"59",    sali_kpl:"3",  montana_wolt:"182.00", mw_kpl:"8",  rotana:"40.50",  rot_kpl:"3", dubai:"29.90",  dub_kpl:"3"},
      {date:"2026-03-04", sali:"0",     sali_kpl:"0",  montana_wolt:"115.00", mw_kpl:"4",  rotana:"0",      rot_kpl:"0", dubai:"29.60",  dub_kpl:"3"},
      {date:"2026-03-03", sali:"42.5",  sali_kpl:"2",  montana_wolt:"130.50", mw_kpl:"6",  rotana:"14.40",  rot_kpl:"1", dubai:"31.00",  dub_kpl:"2"},
      {date:"2026-03-02", sali:"42",    sali_kpl:"3",  montana_wolt:"210.56", mw_kpl:"11", rotana:"93.78",  rot_kpl:"4", dubai:"80.00",  dub_kpl:"6"},
      {date:"2026-03-01", sali:"42",    sali_kpl:"2",  montana_wolt:"627.00", mw_kpl:"28", rotana:"47.63",  rot_kpl:"4", dubai:"109.00", dub_kpl:"6"},
    ];
  });
  const [historyFilter, setHistoryFilter] = useState("all");
  const [woltSaved, setWoltSaved] = useState(false);
  const [editEntry, setEditEntry] = useState(null);
  const [pdfFrom, setPdfFrom] = useState("");
  const [pdfTo, setPdfTo] = useState("");
  const [pdfRest, setPdfRest] = useState("all");
  const chatRef = useRef(null);

  const t = T[lang]||T.fi;
  const dir = lang==="ar"?"rtl":"ltr";
  const rest = activeRest ? RESTS[activeRest] : null;
  const accent = rest?.color||"#e8a020";
  const currentMenu = MENU[activeRest||"montana_inside"]||MENU.montana_inside;

  const notify = (msg,type="success") => { setNotif({msg,type}); setTimeout(()=>setNotif(null),3000); };
  useEffect(()=>{ chatRef.current?.scrollIntoView({behavior:"smooth"}); },[chatMsgs]);

  const addToCart = item => setCart(p=>{ const ex=p.find(i=>i.id===item.id); return ex?p.map(i=>i.id===item.id?{...i,qty:i.qty+1}:i):[...p,{...item,qty:1}]; });
  const removeFromCart = id => setCart(p=>p.filter(i=>i.id!==id));
  const updateQty = (id,d) => setCart(p=>p.map(i=>i.id===id?{...i,qty:Math.max(1,i.qty+d)}:i));
  const cartTotal = cart.reduce((s,i)=>s+i.price*i.qty,0);

  const completeSale = () => {
    if(!cart.length) return;
    const order={num:orderNum,items:[...cart],total:cartTotal,payment:payMethod,table:tableNum,note:orderNote,rest:activeRest||"montana_inside",time:new Date()};
    setSalesHistory(p=>[...p,order]);
    setSaleComplete(order);
    setOrderNum(n=>n+1);
    setCart([]); setTableNum(""); setOrderNote("");
  };

  const sendChat = async () => {
    if(!chatInput.trim()||aiLoading) return;
    const msg=chatInput.trim(); setChatInput("");
    setChatMsgs(p=>[...p,{role:"user",text:msg}]);
    setAiLoading(true);
    const reply=await callAI(msg);
    setChatMsgs(p=>[...p,{role:"ai",text:reply}]);
    setAiLoading(false);
  };

  const quickPrompt = async (key) => {
    setScreen("assistant"); setQuickKey(key);
    const rName = rest?.name||"Montana Ristorante";
    const prompts = {
      ig:       lang==="ar"?`اكتب منشور Instagram جذاب بالفنلندي مع هاشتاقات لـ ${rName}. تقييم Wolt 9.6.`:`Kirjoita houkutteleva Instagram-julkaisu suomeksi hashtageineen. ${rName}. Wolt 9.6.`,
      tiktok:   lang==="ar"?`فكرة فيديو TikTok بسيطة لـ ${rName}. يعمل المطعم بشخص واحد.`:`Yksinkertainen TikTok-idea ${rName}:lle. Yksin työskentelevä omistaja.`,
      wolt:     lang==="ar"?`3 ردود احترافية على تقييمات Wolt لـ ${rName}. إيجابي وسلبي ومحايد.`:`3 ammattimaista vastausta Wolt-arvosteluihin. ${rName}.`,
      report:   lang==="ar"?`تقرير يومي مختصر وتوصيات لزيادة مبيعات ${rName} غداً.`:`Lyhyt päiväraportti ja suositukset ${rName}:n myynnin kasvattamiseksi.`,
      menu:     lang==="ar"?`3 توصيات محددة لزيادة الربح بناءً على منيو ${rName}.`:`3 konkreettista suositusta katteen parantamiseksi ${rName}:n menuun perustuen.`,
      compete:  lang==="ar"?`5 استراتيجيات عملية لهذا الأسبوع لتميّز ${rName} في توركو.`:`5 käytännön strategiaa tälle viikolle ${rName}:n erottumiseksi Turussa.`,
    };
    setChatMsgs(p=>[...p,{role:"system",text:key}]);
    setAiLoading(true);
    const reply=await callAI(prompts[key]||prompts.report);
    setChatMsgs(p=>[...p,{role:"ai",text:reply}]);
    setAiLoading(false); setQuickKey(null);
  };

  const cats = ["all",...new Set(currentMenu.map(i=>i.cat))];
  const filteredMenu = currentMenu.filter(i=>(catFilter==="all"||i.cat===catFilter)&&(!searchQ||i.name.toLowerCase().includes(searchQ.toLowerCase())));
  const todayStr = new Date().toDateString();
  const todayOrders = salesHistory.filter(o=>new Date(o.time).toDateString()===todayStr);
  const todaySales = todayOrders.reduce((s,o)=>s+o.total,0);

  const navItems = [
    {id:"group",    icon:"🏢", label:t.groupOverview, always:true},
    {id:"dashboard",icon:"📊", label:t.dashboard},
    {id:"pos",      icon:"🧾", label:t.pos},
    {id:"analytics",icon:"📈", label:t.analytics},
    {id:"assistant",icon:"🤖", label:t.assistant, always:true},
    {id:"content",  icon:"📸", label:t.content, always:true},
    {id:"settings", icon:"⚙️", label:t.settings, always:true},
  ].filter(n=>n.always||activeRest);

  if(!loggedIn) return (
    <div dir={dir} style={{minHeight:"100vh",background:"radial-gradient(ellipse at 30% 20%,#1c1400,#0a0a0a 70%)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      <div style={{background:"rgba(255,255,255,0.04)",backdropFilter:"blur(20px)",border:"1px solid rgba(232,160,32,0.2)",borderRadius:24,padding:"52px 44px",width:420,boxShadow:"0 32px 80px rgba(0,0,0,0.7)"}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <div style={{fontSize:60}}>🍽️</div>
          <div style={{fontSize:28,fontWeight:900,color:"#e8a020",marginTop:8}}>Montana AI</div>
          <div style={{color:"#555",fontSize:12,marginTop:6}}>Tommilankatu 1, Turku · 044 246 6447</div>
          <div style={{color:"#444",fontSize:11,marginTop:2}}>Montana داخلي · Montana Wolt · Rotana · Dubai</div>
        </div>
        <div style={{display:"flex",gap:8,marginBottom:20}}>
          {[["fi","🇫🇮 Suomi"],["ar","🇸🇦 عربي"]].map(([l,lb])=>(
            <button key={l} onClick={()=>setLang(l)} style={{flex:1,padding:"9px 0",borderRadius:9,border:"1px solid",borderColor:lang===l?"#e8a020":"rgba(255,255,255,0.1)",background:lang===l?"rgba(232,160,32,0.15)":"transparent",color:lang===l?"#e8a020":"#555",cursor:"pointer",fontWeight:700,fontSize:13}}>{lb}</button>
          ))}
        </div>
        <input defaultValue="owner@montana.fi" placeholder={t.email} style={{width:"100%",padding:"13px 16px",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.06)",color:"#fff",fontSize:14,boxSizing:"border-box",marginBottom:12,outline:"none"}}/>
        <input type="password" defaultValue="••••••••" placeholder={t.password} style={{width:"100%",padding:"13px 16px",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.06)",color:"#fff",fontSize:14,boxSizing:"border-box",marginBottom:24,outline:"none"}}/>
        <button onClick={()=>{setLoggedIn(true);setScreen("group");}} style={{width:"100%",padding:"15px 0",borderRadius:12,border:"none",background:"linear-gradient(135deg,#e8a020,#f5c842)",color:"#000",fontSize:16,fontWeight:900,cursor:"pointer"}}>{t.login}</button>
      </div>
    </div>
  );

  return (
    <div dir={dir} style={{display:"flex",height:"100vh",background:"#0a0a0a",fontFamily:"'Segoe UI',system-ui,sans-serif",overflow:"hidden",color:"#fff"}}>

      {notif&&<div style={{position:"fixed",top:20,left:"50%",transform:"translateX(-50%)",zIndex:9999,background:notif.type==="success"?"#16a34a":"#dc2626",color:"#fff",padding:"12px 28px",borderRadius:12,fontWeight:700,fontSize:14,boxShadow:"0 8px 32px rgba(0,0,0,0.5)",whiteSpace:"nowrap"}}>{notif.msg}</div>}

      {showPicker&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.8)",zIndex:998,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setShowPicker(false)}>
          <div style={{background:"#161616",border:"1px solid rgba(255,255,255,0.1)",borderRadius:20,padding:28,minWidth:380}} onClick={e=>e.stopPropagation()}>
            <div style={{fontWeight:800,fontSize:17,marginBottom:18}}>{t.switchRestaurant}</div>
            <div onClick={()=>{setActiveRest(null);setScreen("group");setShowPicker(false);}} style={{display:"flex",alignItems:"center",gap:14,padding:"13px 16px",borderRadius:12,cursor:"pointer",marginBottom:8,background:!activeRest?"rgba(232,160,32,0.12)":"rgba(255,255,255,0.04)",border:`1px solid ${!activeRest?"#e8a020":"rgba(255,255,255,0.07)"}`}}>
              <span style={{fontSize:28}}>🏢</span>
              <div><div style={{fontWeight:700,color:!activeRest?"#e8a020":"#fff"}}>{t.allRestaurants}</div></div>
            </div>
            {Object.entries(RESTS).map(([id,r])=>(
              <div key={id} onClick={()=>{setActiveRest(id);setScreen("dashboard");setShowPicker(false);setCart([]);setCatFilter("all");}} style={{display:"flex",alignItems:"center",gap:14,padding:"13px 16px",borderRadius:12,cursor:"pointer",marginBottom:8,background:activeRest===id?`${r.color}15`:"rgba(255,255,255,0.04)",border:`1px solid ${activeRest===id?r.color:"rgba(255,255,255,0.07)"}`}}>
                <span style={{fontSize:28}}>{r.emoji}</span>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,color:activeRest===id?r.color:"#fff"}}>{r.name}</div>
                  <div style={{fontSize:11,color:"#555"}}>{MENU[id]?.length||0} {lang==="ar"?"صنف":"tuotetta"} · {r.type==="inside"?(lang==="ar"?"داخلي":"Sisäinen"):"Wolt"}</div>
                </div>
                <span style={{fontSize:10,padding:"2px 8px",borderRadius:8,background:r.type==="inside"?"rgba(232,160,32,0.15)":"rgba(99,102,241,0.15)",color:r.type==="inside"?"#e8a020":"#818cf8",fontWeight:700}}>{r.type==="inside"?"🏠":"🛵"}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SIDEBAR */}
      <div style={{width:220,background:"#111",borderRight:"1px solid rgba(255,255,255,0.06)",display:"flex",flexDirection:"column",flexShrink:0}}>
        <div style={{padding:"18px 14px 14px",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
          <div style={{fontSize:16,fontWeight:900,color:"#e8a020",marginBottom:12}}>🍽️ Montana AI</div>
          <button onClick={()=>setShowPicker(true)} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1px solid ${accent}30`,background:`${accent}0c`,cursor:"pointer",display:"flex",alignItems:"center",gap:10,textAlign:"left"}}>
            <span style={{fontSize:20}}>{rest?rest.emoji:"🏢"}</span>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontWeight:700,fontSize:11,color:accent,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{rest?rest.shortName:t.allRestaurants}</div>
              <div style={{fontSize:10,color:"#444"}}>▾ {t.switchRestaurant}</div>
            </div>
          </button>
        </div>
        <div style={{flex:1,padding:"10px 8px",overflowY:"auto"}}>
          {navItems.map(n=>(
            <button key={n.id} onClick={()=>setScreen(n.id)} style={{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"10px 12px",borderRadius:10,border:"none",cursor:"pointer",marginBottom:3,background:screen===n.id?`${accent}1a`:"transparent",color:screen===n.id?accent:"#555",fontWeight:screen===n.id?700:400,fontSize:13,textAlign:"left"}}>
              <span style={{fontSize:15}}>{n.icon}</span>{n.label}
            </button>
          ))}
        </div>
        <div style={{padding:"10px 8px",borderTop:"1px solid rgba(255,255,255,0.06)"}}>
          <div style={{display:"flex",gap:4,padding:"0 4px",marginBottom:8}}>
            {["fi","ar"].map(l=>(
              <button key={l} onClick={()=>setLang(l)} style={{flex:1,padding:"5px 0",borderRadius:6,border:"none",background:lang===l?"#e8a020":"rgba(255,255,255,0.06)",color:lang===l?"#000":"#444",cursor:"pointer",fontSize:10,fontWeight:700}}>{l==="fi"?"🇫🇮 FI":"🇸🇦 AR"}</button>
            ))}
          </div>
          <button onClick={()=>setLoggedIn(false)} style={{display:"flex",alignItems:"center",gap:8,width:"100%",padding:"9px 12px",borderRadius:10,border:"none",cursor:"pointer",background:"transparent",color:"#ef4444",fontSize:13}}>🚪 {t.logout}</button>
        </div>
      </div>

      {/* MAIN */}
      <div style={{flex:1,overflow:"auto",padding:26,background:"#0c0c0c"}}>

        {/* GROUP */}
        {screen==="group"&&(
          <div>
            <div style={{marginBottom:26}}>
              <h1 style={{fontSize:26,fontWeight:900,margin:0}}>{t.groupOverview}</h1>
              <div style={{color:"#555",fontSize:12,marginTop:4}}>Tommilankatu 1, 20300 Turku · 044 246 6447</div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:26}}>
              {[
                {label:t.combinedSales,value:"€4,340",icon:"💰",color:"#e8a020"},
                {label:t.todayCustomers,value:`${todayOrders.length+62}`,icon:"👥",color:"#10b981"},
                {label:t.woltOrders,value:"130",icon:"🛵",color:"#7c6ff7"},
                {label:t.inHouseOrders,value:`${todayOrders.length}`,icon:"🧾",color:"#f59e0b"},
              ].map((c,i)=>(
                <div key={i} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:14,padding:18}}>
                  <div style={{display:"flex",justifyContent:"space-between"}}><div><div style={{color:"#555",fontSize:11,marginBottom:8}}>{c.label}</div><div style={{fontSize:24,fontWeight:900,color:c.color}}>{c.value}</div></div><span style={{fontSize:26}}>{c.icon}</span></div>
                </div>
              ))}
            </div>

            <h3 style={{color:"#555",fontSize:11,marginBottom:12,textTransform:"uppercase",letterSpacing:1.5,fontWeight:700}}>{lang==="ar"?"المطاعم الأربعة":"4 Ravintolaa / Menua"}</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:26}}>
              {Object.entries(RESTS).map(([id,r])=>(
                <div key={id} onClick={()=>{setActiveRest(id);setScreen("dashboard");}} style={{background:"#111",border:`1px solid ${r.color}20`,borderRadius:16,padding:18,cursor:"pointer"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
                    <span style={{fontSize:32}}>{r.emoji}</span>
                    <span style={{fontSize:9,padding:"2px 7px",borderRadius:7,background:r.type==="inside"?"rgba(232,160,32,0.15)":"rgba(99,102,241,0.15)",color:r.type==="inside"?"#e8a020":"#818cf8",fontWeight:700}}>{r.type==="inside"?"🏠":"🛵 Wolt"}</span>
                  </div>
                  <div style={{fontWeight:800,fontSize:13,marginBottom:3}}>{r.shortName}</div>
                  <div style={{fontSize:11,color:"#444",marginBottom:12}}>{MENU[id]?.length||0} {lang==="ar"?"صنف":"tuotetta"}</div>
                  <div style={{fontSize:18,fontWeight:800,color:r.color}}>€{WEEKLY[id][5]}</div>
                  <div style={{fontSize:10,color:"#444",marginTop:2}}>{lang==="ar"?"أمس":"Eilen"}</div>
                </div>
              ))}
            </div>

            <div style={{background:"rgba(255,255,255,0.03)",borderRadius:16,padding:22,border:"1px solid rgba(255,255,255,0.06)"}}>
              <div style={{fontWeight:700,fontSize:13,color:"#666",marginBottom:16}}>{t.weeklySales}</div>
              <div style={{display:"flex",gap:6,alignItems:"flex-end",height:100}}>
                {DAYS.map((day,i)=>{
                  const total=Object.values(WEEKLY).reduce((s,w)=>s+w[i],0);
                  const max=Math.max(...DAYS.map((_,j)=>Object.values(WEEKLY).reduce((s,w)=>s+w[j],0)));
                  return(
                    <div key={day} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:5}}>
                      <div style={{fontSize:9,color:"#444"}}>€{(total/1000).toFixed(1)}k</div>
                      <div style={{width:"100%",borderRadius:4,background:"linear-gradient(180deg,#e8a020,#e8a02040)",height:`${(total/max)*80}px`}}/>
                      <div style={{fontSize:9,color:"#444"}}>{day}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* DASHBOARD */}
        {screen==="dashboard"&&rest&&(
          <div>
            <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:24}}>
              <span style={{fontSize:38}}>{rest.emoji}</span>
              <div>
                <h1 style={{fontSize:22,fontWeight:900,margin:0,color:accent}}>{rest.name}</h1>
                <div style={{fontSize:12,color:"#555",marginTop:3}}>
                  {MENU[activeRest]?.length||0} {lang==="ar"?"صنف":"tuotetta"} · {rest.type==="inside"?(lang==="ar"?"أسعار داخلية":"Sisäiset hinnat"):"Wolt"} · Tommilankatu 1
                </div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:20}}>
              {[
                {label:t.todaySales,value:`€${(todaySales+WEEKLY[activeRest][6]).toFixed(0)}`,color:accent,icon:"💰"},
                {label:t.todayCustomers,value:todayOrders.length+47,color:"#10b981",icon:"👥"},
                {label:lang==="ar"?"الأصناف":"Tuotteita",value:MENU[activeRest]?.length||0,color:"#7c6ff7",icon:"🍽️"},
                {label:t.avgOrder,value:`€${(WEEKLY[activeRest].reduce((a,b)=>a+b,0)/7/45).toFixed(2)}`,color:"#f59e0b",icon:"📊"},
              ].map((c,i)=>(
                <div key={i} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:14,padding:18}}>
                  <div style={{display:"flex",justifyContent:"space-between"}}><div><div style={{color:"#555",fontSize:11,marginBottom:8}}>{c.label}</div><div style={{fontSize:22,fontWeight:900,color:c.color}}>{c.value}</div></div><span style={{fontSize:24}}>{c.icon}</span></div>
                </div>
              ))}
            </div>
            <div style={{background:`${accent}10`,border:`1px solid ${accent}25`,borderRadius:14,padding:18,marginBottom:18}}>
              <div style={{fontWeight:700,fontSize:13,color:accent,marginBottom:12}}>🤖 {t.assistant}</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7}}>
                {[{key:"ig",icon:"📸",label:"Instagram"},{key:"tiktok",icon:"🎵",label:"TikTok"},{key:"wolt",icon:"⭐",label:"Wolt"},{key:"report",icon:"📊",label:lang==="ar"?"تقرير":"Raportti"},{key:"menu",icon:"🍕",label:lang==="ar"?"منيو":"Menu"},{key:"compete",icon:"🏆",label:lang==="ar"?"تميّز":"Kilpailu"}].map(btn=>(
                  <button key={btn.key} onClick={()=>quickPrompt(btn.key)} disabled={!!quickKey||aiLoading} style={{padding:"9px 6px",borderRadius:9,border:`1px solid ${accent}20`,background:`${accent}08`,color:accent,cursor:"pointer",fontSize:12,fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",gap:5}}>
                    {quickKey===btn.key?"⏳":btn.icon} {btn.label}
                  </button>
                ))}
              </div>
            </div>
            <div style={{background:"rgba(255,255,255,0.03)",borderRadius:13,padding:16,border:"1px solid rgba(255,255,255,0.06)"}}>
              <div style={{fontWeight:700,fontSize:12,color:"#666",marginBottom:12}}>{t.popularItems}</div>
              {currentMenu.filter(i=>i.popular).slice(0,6).map((item,i)=>(
                <div key={item.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:i<5?"1px solid rgba(255,255,255,0.05)":"none"}}>
                  <div style={{display:"flex",alignItems:"center",gap:9}}>
                    <div style={{width:20,height:20,borderRadius:"50%",background:`${accent}20`,color:accent,fontSize:10,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}}>{i+1}</div>
                    <span style={{fontSize:13,color:"#ddd"}}>{item.name}</span>
                  </div>
                  <span style={{color:accent,fontWeight:700,fontSize:13}}>€{item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* POS */}
        {screen==="pos"&&(
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <div>
                <h1 style={{fontSize:20,fontWeight:900,margin:0}}>🧾 {t.pos}{rest?` — ${rest.shortName}`:""}</h1>
                <div style={{fontSize:11,color:"#555",marginTop:2}}>SEWOO SLK-TE323 · USB · ESC/POS · 80mm</div>
              </div>
              <div style={{display:"flex",gap:8}}>
                <div style={{background:"rgba(255,255,255,0.05)",borderRadius:8,padding:"5px 12px",fontSize:12,color:"#888"}}>👥 {todayOrders.length}</div>
                <div style={{background:"rgba(16,185,129,0.1)",borderRadius:8,padding:"5px 12px",fontSize:12,color:"#10b981",fontWeight:700}}>💰 €{todaySales.toFixed(2)}</div>
              </div>
            </div>

            {saleComplete?(
              <div style={{textAlign:"center",padding:"50px 20px"}}>
                <div style={{fontSize:72}}>✅</div>
                <div style={{fontSize:24,fontWeight:900,color:"#10b981",marginTop:14}}>{t.orderSuccess}</div>
                <div style={{color:"#666",fontSize:14,marginTop:6}}>#{saleComplete.num} · €{saleComplete.total.toFixed(2)} · {saleComplete.payment}</div>
                <div style={{display:"flex",gap:10,justifyContent:"center",marginTop:22}}>
                  <button onClick={()=>{printReceipt(saleComplete,saleComplete.rest);notify("🖨️ Tulostetaan...");}} style={{padding:"12px 22px",borderRadius:10,border:"none",background:"#e8a020",color:"#000",fontWeight:700,cursor:"pointer",fontSize:13}}>🖨️ {t.printReceipt}</button>
                  <button onClick={()=>{printKitchen(saleComplete);notify("👨‍🍳 Keittiölle!");}} style={{padding:"12px 22px",borderRadius:10,border:"1px solid rgba(255,255,255,0.15)",background:"transparent",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:13}}>👨‍🍳 {t.printKitchen}</button>
                  <button onClick={()=>setSaleComplete(null)} style={{padding:"12px 22px",borderRadius:10,border:"none",background:"rgba(255,255,255,0.08)",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:13}}>+ {t.newSale}</button>
                </div>
              </div>
            ):(
              <div style={{display:"grid",gridTemplateColumns:"1fr 345px",gap:16}}>
                <div>
                  <div style={{display:"flex",gap:8,marginBottom:10}}>
                    <input value={searchQ} onChange={e=>setSearchQ(e.target.value)} placeholder={`🔍 ${t.search}`} style={{flex:1,padding:"8px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#fff",fontSize:13,outline:"none"}}/>
                    <input value={tableNum} onChange={e=>setTableNum(e.target.value)} placeholder={`🪑 ${t.tableNum}`} style={{width:85,padding:"8px 10px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#fff",fontSize:13,outline:"none"}}/>
                  </div>
                  <div style={{display:"flex",gap:4,marginBottom:10,flexWrap:"wrap"}}>
                    {cats.slice(0,10).map(c=>(
                      <button key={c} onClick={()=>setCatFilter(c)} style={{padding:"4px 10px",borderRadius:14,border:"none",cursor:"pointer",background:catFilter===c?accent:"rgba(255,255,255,0.07)",color:catFilter===c?"#000":"#666",fontWeight:catFilter===c?700:400,fontSize:10,whiteSpace:"nowrap"}}>
                        {c==="all"?(lang==="ar"?"الكل":"Kaikki"):c}
                      </button>
                    ))}
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6}}>
                    {filteredMenu.slice(0,36).map(item=>(
                      <button key={item.id} onClick={()=>addToCart(item)} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:10,padding:"10px 8px",cursor:"pointer",textAlign:"left",position:"relative"}}>
                        {item.popular&&<div style={{position:"absolute",top:4,right:4,fontSize:7,padding:"1px 4px",borderRadius:4,background:`${accent}22`,color:accent,fontWeight:700}}>⭐</div>}
                        <div style={{fontSize:9,color:"#444",marginBottom:3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.cat}</div>
                        <div style={{color:"#ddd",fontWeight:600,fontSize:11,marginBottom:4,lineHeight:1.3,minHeight:28}}>{item.name}</div>
                        <div style={{color:accent,fontWeight:800,fontSize:13}}>€{item.price.toFixed(2)}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{background:"rgba(255,255,255,0.03)",borderRadius:14,padding:14,border:"1px solid rgba(255,255,255,0.07)",display:"flex",flexDirection:"column"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                    <h3 style={{margin:0,color:accent,fontSize:14}}>🧾 #{orderNum}</h3>
                    {cart.length>0&&<button onClick={()=>setCart([])} style={{fontSize:11,color:"#ef4444",background:"transparent",border:"none",cursor:"pointer"}}>✕ {t.clearOrder}</button>}
                  </div>
                  {cart.length===0?(
                    <div style={{textAlign:"center",padding:"28px 0",color:"#333",fontSize:13}}>{t.noItems}</div>
                  ):(
                    <div style={{overflowY:"auto",maxHeight:260,marginBottom:8}}>
                      {cart.map(item=>(
                        <div key={item.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                          <div style={{flex:1,minWidth:0}}>
                            <div style={{fontSize:11,color:"#ddd",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.name}</div>
                            <div style={{fontSize:10,color:"#444"}}>€{(item.price*item.qty).toFixed(2)}</div>
                          </div>
                          <div style={{display:"flex",alignItems:"center",gap:3}}>
                            <button onClick={()=>updateQty(item.id,-1)} style={{width:19,height:19,borderRadius:4,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"#aaa",cursor:"pointer",fontSize:12,display:"flex",alignItems:"center",justifyContent:"center"}}>−</button>
                            <span style={{fontSize:12,fontWeight:700,minWidth:14,textAlign:"center"}}>{item.qty}</span>
                            <button onClick={()=>updateQty(item.id,1)} style={{width:19,height:19,borderRadius:4,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"#aaa",cursor:"pointer",fontSize:12,display:"flex",alignItems:"center",justifyContent:"center"}}>+</button>
                            <button onClick={()=>removeFromCart(item.id)} style={{width:19,height:19,borderRadius:4,border:"none",background:"rgba(239,68,68,0.12)",color:"#ef4444",cursor:"pointer",fontSize:10,marginLeft:2}}>✕</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <input value={orderNote} onChange={e=>setOrderNote(e.target.value)} placeholder={lang==="ar"?"ملاحظة للمطبخ...":"Keittiöhuomio..."} style={{width:"100%",padding:"7px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.04)",color:"#888",fontSize:11,marginTop:8,boxSizing:"border-box",outline:"none"}}/>
                  <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:10,marginTop:10}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}>
                      <span style={{fontWeight:700,fontSize:13}}>{t.orderTotal}</span>
                      <span style={{color:accent,fontWeight:900,fontSize:20}}>€{cartTotal.toFixed(2)}</span>
                    </div>
                    <div style={{display:"flex",gap:4,marginBottom:8}}>
                      {["cash","card","mobilePay"].map(m=>(
                        <button key={m} onClick={()=>setPayMethod(m)} style={{flex:1,padding:"6px 0",borderRadius:6,border:"1px solid",borderColor:payMethod===m?accent:"rgba(255,255,255,0.08)",background:payMethod===m?`${accent}18`:"transparent",color:payMethod===m?accent:"#555",cursor:"pointer",fontWeight:payMethod===m?700:400,fontSize:10}}>{t[m]}</button>
                      ))}
                    </div>
                    <button onClick={completeSale} disabled={!cart.length} style={{width:"100%",padding:"12px 0",borderRadius:9,border:"none",background:cart.length?`linear-gradient(135deg,${accent},${accent}cc)`:"#1a1a1a",color:cart.length?"#000":"#333",fontWeight:900,cursor:cart.length?"pointer":"default",fontSize:14,marginBottom:6}}>✅ {t.completeSale}</button>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
                      <button onClick={()=>{if(cart.length){printKitchen({num:orderNum,items:[...cart],total:cartTotal,payment:payMethod,table:tableNum,note:orderNote});notify("👨‍🍳 Keittiölle!");}}} style={{padding:"7px 0",borderRadius:7,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"#666",cursor:"pointer",fontSize:10,fontWeight:600}}>👨‍🍳 {t.printKitchen}</button>
                      <button onClick={()=>{if(cart.length){printReceipt({num:orderNum,items:[...cart],total:cartTotal,payment:payMethod,table:tableNum,note:orderNote},activeRest||"montana_inside");notify("🖨️ Tulostetaan!");}}} style={{padding:"7px 0",borderRadius:7,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"#666",cursor:"pointer",fontSize:10,fontWeight:600}}>🖨️ {t.printReceipt}</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ANALYTICS */}
        {screen==="analytics"&&(()=>{
          // COSTS per unit (editable estimates)
          const COSTS = {
            sali: 6.5,        // avg cost per dine-in order
            montana_wolt: 7.2, // avg cost per wolt order (incl wolt fee ~30%)
            rotana: 6.8,
            dubai: 6.5,
          };
          const WOLT_FEE = 0.30; // 30% Wolt commission

          const now = new Date();
          const filtered = (() => {
            const f = historyFilter;
            if(f==="week"){const w=new Date(now);w.setDate(now.getDate()-7);return woltHistory.filter(d=>new Date(d.date)>=w);}
            if(f==="month"){return woltHistory.filter(d=>new Date(d.date).getMonth()===now.getMonth()&&new Date(d.date).getFullYear()===now.getFullYear());}
            if(f==="lastmonth"){const lm=now.getMonth()===0?11:now.getMonth()-1;const ly=now.getMonth()===0?now.getFullYear()-1:now.getFullYear();return woltHistory.filter(d=>new Date(d.date).getMonth()===lm&&new Date(d.date).getFullYear()===ly);}
            if(f==="year"){return woltHistory.filter(d=>new Date(d.date).getFullYear()===now.getFullYear());}
            return woltHistory;
          })();

          const tot = (() => {
            const r = {sali:0,sali_kpl:0,mw:0,mw_kpl:0,rot:0,rot_kpl:0,dub:0,dub_kpl:0,all:0,all_kpl:0};
            filtered.forEach(d=>{
              r.sali+=parseFloat(d.sali)||0; r.sali_kpl+=parseInt(d.sali_kpl)||0;
              r.mw+=parseFloat(d.montana_wolt)||0; r.mw_kpl+=parseInt(d.mw_kpl)||0;
              r.rot+=parseFloat(d.rotana)||0; r.rot_kpl+=parseInt(d.rot_kpl)||0;
              r.dub+=parseFloat(d.dubai)||0; r.dub_kpl+=parseInt(d.dub_kpl)||0;
            });
            r.all=r.sali+r.mw+r.rot+r.dub; r.all_kpl=r.sali_kpl+r.mw_kpl+r.rot_kpl+r.dub_kpl;
            return r;
          })();

          // Profit calculations
          const calcProfit = (revenue, kpl, costPerUnit, isWolt) => {
            const totalCost = kpl * costPerUnit;
            const woltFee = isWolt ? revenue * WOLT_FEE : 0;
            return revenue - totalCost - woltFee;
          };

          const profits = {
            sali: calcProfit(tot.sali, tot.sali_kpl, COSTS.sali, false),
            mw: calcProfit(tot.mw, tot.mw_kpl, COSTS.montana_wolt, true),
            rot: calcProfit(tot.rot, tot.rot_kpl, COSTS.rotana, true),
            dub: calcProfit(tot.dub, tot.dub_kpl, COSTS.dubai, true),
          };
          const totalProfit = profits.sali + profits.mw + profits.rot + profits.dub;
          const profitMargin = tot.all > 0 ? (totalProfit / tot.all * 100) : 0;

          // Avg order values
          const avgOrder = {
            sali: tot.sali_kpl > 0 ? (tot.sali / tot.sali_kpl) : 0,
            mw: tot.mw_kpl > 0 ? (tot.mw / tot.mw_kpl) : 0,
            rot: tot.rot_kpl > 0 ? (tot.rot / tot.rot_kpl) : 0,
            dub: tot.dub_kpl > 0 ? (tot.dub / tot.dub_kpl) : 0,
          };

          // Peak day analysis
          const dayStats = {};
          filtered.forEach(d => {
            const day = new Date(d.date).toLocaleDateString("fi-FI",{weekday:"short"});
            if(!dayStats[day]) dayStats[day] = {rev:0, kpl:0, days:0};
            dayStats[day].rev += (parseFloat(d.sali)||0)+(parseFloat(d.montana_wolt)||0)+(parseFloat(d.rotana)||0)+(parseFloat(d.dubai)||0);
            dayStats[day].kpl += (parseInt(d.sali_kpl)||0)+(parseInt(d.mw_kpl)||0)+(parseInt(d.rot_kpl)||0)+(parseInt(d.dub_kpl)||0);
            dayStats[day].days++;
          });
          const peakDay = Object.entries(dayStats).sort((a,b)=>b[1].rev-a[1].rev)[0];
          const weakDay = Object.entries(dayStats).sort((a,b)=>a[1].rev-b[1].rev)[0];

          // Best restaurant
          const restRevs = [
            {name:"Montana Sali", rev:tot.sali, kpl:tot.sali_kpl, profit:profits.sali, color:"#e8a020"},
            {name:"Montana Wolt", rev:tot.mw, kpl:tot.mw_kpl, profit:profits.mw, color:"#f97316"},
            {name:"Rotana", rev:tot.rot, kpl:tot.rot_kpl, profit:profits.rot, color:"#7c6ff7"},
            {name:"Dubai", rev:tot.dub, kpl:tot.dub_kpl, profit:profits.dub, color:"#22c98a"},
          ].sort((a,b)=>b.profit-a.profit);

          // Smart alerts
          const alerts = [];
          if(profitMargin < 20) alerts.push({type:"warn", msg:`Kateprosentti ${profitMargin.toFixed(1)}% — tavoite on yli 25%`, action:"Tarkista Wolt-hinnat"});
          if(avgOrder.mw > 0 && avgOrder.mw < 18) alerts.push({type:"warn", msg:`Montana Wolt tilauksen keskiarvo ${avgOrder.mw.toFixed(2)}€ — liian alhainen`, action:"Lisää lisämyynti tai combo-tarjous"});
          if(tot.mw_kpl > 0 && tot.sali_kpl / (tot.mw_kpl||1) < 0.1) alerts.push({type:"info", msg:"Sali-myynti on alle 10% Wolt-myynnistä", action:"Harkitse lounastarjousta saliinkin"});
          if(profits.mw < profits.sali && tot.mw_kpl > tot.sali_kpl) alerts.push({type:"warn", msg:"Wolt tuo enemmän tilauksia mutta vähemmän voittoa kuin sali", action:"Harkitse Wolt-hintojen korotusta 5-10%"});
          if(tot.all_kpl > 0) alerts.push({type:"ok", msg:`Tilauksia yhteensä ${tot.all_kpl} kpl — hyvä tulos!`, action:""});

          // Recommendations
          const recs = [
            profits.mw / (tot.mw||1) < 0.25 ? "📈 Nosta Wolt-hintoja 5% — Wolt ottaa 30% komissiosta" : null,
            avgOrder.mw < 20 ? "🍕 Lisää combo-tarjous Woltiin: Pizza + juoma +2€" : null,
            weakDay ? `📅 ${weakDay[0]} on heikoin päivä — harkitse tarjousta` : null,
            peakDay ? `⭐ ${peakDay[0]} on paras päivä — lisää markkinointia` : null,
            tot.sali_kpl < 5 ? "🪑 Sali-myynti vähäistä — harkitse lounasmenu tai tarjous" : null,
          ].filter(Boolean);

          return (
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <h1 style={{fontSize:22,fontWeight:900,margin:0}}>📊 Analytiikka Pro</h1>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                {[["all","Kaikki"],["week","Viikko"],["month","Kk"],["lastmonth","Ed.kk"],["year","Vuosi"]].map(([v,l])=>(
                  <button key={v} onClick={()=>setHistoryFilter(v)} style={{padding:"5px 10px",borderRadius:8,border:"none",background:historyFilter===v?"#e8a020":"rgba(255,255,255,0.06)",color:historyFilter===v?"#000":"#666",cursor:"pointer",fontSize:11,fontWeight:700}}>{l}</button>
                ))}
              </div>
            </div>

            {/* SMART ALERTS */}
            {alerts.length>0&&<div style={{marginBottom:14}}>
              {alerts.map((a,i)=>(
                <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"10px 14px",borderRadius:10,marginBottom:6,background:a.type==="warn"?"rgba(239,68,68,0.08)":a.type==="ok"?"rgba(16,185,129,0.08)":"rgba(59,130,246,0.08)",border:`1px solid ${a.type==="warn"?"rgba(239,68,68,0.2)":a.type==="ok"?"rgba(16,185,129,0.2)":"rgba(59,130,246,0.2)"}`}}>
                  <span style={{fontSize:16}}>{a.type==="warn"?"⚠️":a.type==="ok"?"✅":"💡"}</span>
                  <div>
                    <div style={{fontSize:12,color:"#ccc"}}>{a.msg}</div>
                    {a.action&&<div style={{fontSize:11,color:"#666",marginTop:2}}>→ {a.action}</div>}
                  </div>
                </div>
              ))}
            </div>}

            {/* KEY METRICS */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14}}>
              {[
                {label:"💰 Liikevaihto",value:`${tot.all.toFixed(2)}€`,sub:`${tot.all_kpl} tilauksia`,color:"#e8a020"},
                {label:"📈 Arvioitu voitto",value:`${totalProfit.toFixed(2)}€`,sub:`Kate ${profitMargin.toFixed(1)}%`,color:profitMargin>25?"#10b981":profitMargin>15?"#f59e0b":"#ef4444"},
                {label:"🛵 Wolt yhteensä",value:`${(tot.mw+tot.rot+tot.dub).toFixed(2)}€`,sub:`${(tot.mw_kpl+tot.rot_kpl+tot.dub_kpl)} tilauksia`,color:"#f97316"},
                {label:"🪑 Sali",value:`${tot.sali.toFixed(2)}€`,sub:`${tot.sali_kpl} tilauksia`,color:"#e8a020"},
              ].map((m,i)=>(
                <div key={i} style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${m.color}25`,borderRadius:14,padding:14}}>
                  <div style={{fontSize:11,color:"#555",marginBottom:4}}>{m.label}</div>
                  <div style={{fontSize:20,fontWeight:900,color:m.color}}>{m.value}</div>
                  <div style={{fontSize:11,color:"#444",marginTop:2}}>{m.sub}</div>
                </div>
              ))}
            </div>

            {/* RESTAURANT PROFIT RANKING */}
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:18,marginBottom:14}}>
              <div style={{fontWeight:800,fontSize:14,marginBottom:12}}>🏆 Ravintolat kannattavuusjärjestyksessä</div>
              {restRevs.map((r,i)=>(
                <div key={i} style={{display:"grid",gridTemplateColumns:"20px 1fr 80px 80px 70px",gap:8,alignItems:"center",padding:"10px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
                  <div style={{fontSize:14}}>{i===0?"🥇":i===1?"🥈":i===2?"🥉":"4️⃣"}</div>
                  <div style={{fontSize:13,fontWeight:700,color:r.color}}>{r.name}</div>
                  <div style={{fontSize:11,color:"#666"}}>{r.rev.toFixed(0)}€</div>
                  <div style={{fontSize:11,color:r.profit>0?"#10b981":"#ef4444",fontWeight:700}}>{r.profit.toFixed(0)}€ voitto</div>
                  <div style={{fontSize:10,color:"#444"}}>{r.kpl} kpl</div>
                </div>
              ))}
            </div>

            {/* AVG ORDER VALUE */}
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:18,marginBottom:14}}>
              <div style={{fontWeight:800,fontSize:14,marginBottom:12}}>💎 Tilauksen keskiarvo</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                {[
                  {name:"🪑 Sali",avg:avgOrder.sali,color:"#e8a020"},
                  {name:"🛵 Montana Wolt",avg:avgOrder.mw,color:"#f97316"},
                  {name:"🛵 Rotana",avg:avgOrder.rot,color:"#7c6ff7"},
                  {name:"🛵 Dubai",avg:avgOrder.dub,color:"#22c98a"},
                ].map((r,i)=>(
                  <div key={i} style={{padding:"10px 14px",borderRadius:12,background:`${r.color}10`,border:`1px solid ${r.color}25`}}>
                    <div style={{fontSize:11,color:"#555"}}>{r.name}</div>
                    <div style={{fontSize:20,fontWeight:900,color:r.color}}>{r.avg.toFixed(2)}€</div>
                    <div style={{fontSize:10,color:r.avg>=20?"#10b981":r.avg>=15?"#f59e0b":"#ef4444"}}>{r.avg>=20?"✅ Hyvä":r.avg>=15?"⚠️ OK":"❌ Alhainen"}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* PEAK DAYS */}
            {Object.keys(dayStats).length>0&&<div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:18,marginBottom:14}}>
              <div style={{fontWeight:800,fontSize:14,marginBottom:12}}>📅 Päiväkohtainen analyysi</div>
              <div style={{display:"grid",gap:6}}>
                {Object.entries(dayStats).sort((a,b)=>b[1].rev-a[1].rev).map(([day,stats],i)=>{
                  const maxRev = Math.max(...Object.values(dayStats).map(s=>s.rev));
                  const pct = maxRev > 0 ? (stats.rev/maxRev*100) : 0;
                  return <div key={day} style={{display:"grid",gridTemplateColumns:"30px 1fr 80px 60px",gap:8,alignItems:"center"}}>
                    <div style={{fontSize:12,color:"#555",fontWeight:700}}>{day}</div>
                    <div style={{height:8,borderRadius:4,background:"rgba(255,255,255,0.05)",overflow:"hidden"}}>
                      <div style={{height:"100%",width:`${pct}%`,background:i===0?"#e8a020":i===Object.keys(dayStats).length-1?"#ef4444":"#555",borderRadius:4,transition:"width 0.3s"}}/>
                    </div>
                    <div style={{fontSize:11,color:i===0?"#e8a020":"#555",fontWeight:i===0?700:400}}>{stats.rev.toFixed(0)}€</div>
                    <div style={{fontSize:10,color:"#444"}}>{stats.kpl} kpl</div>
                  </div>;
                })}
              </div>
            </div>}

            {/* AI RECOMMENDATIONS */}
            <div style={{background:"rgba(0,157,224,0.07)",border:"1px solid rgba(0,157,224,0.2)",borderRadius:16,padding:18,marginBottom:14}}>
              <div style={{fontWeight:800,fontSize:14,color:"#009de0",marginBottom:12}}>🤖 AI-suositukset</div>
              {recs.map((r,i)=>(
                <div key={i} style={{padding:"8px 12px",borderRadius:8,marginBottom:6,background:"rgba(0,157,224,0.05)",fontSize:12,color:"#ccc"}}>{r}</div>
              ))}
              <button onClick={()=>{
                setChatInput(`Analysoi ravintolani myyntitiedot ja anna 5 konkreettista suositusta liikevaihdon kasvattamiseksi:
- Montana Sali: ${tot.sali.toFixed(2)}€ (${tot.sali_kpl} kpl, ka ${avgOrder.sali.toFixed(2)}€/tilaus)
- Montana Wolt: ${tot.mw.toFixed(2)}€ (${tot.mw_kpl} kpl, ka ${avgOrder.mw.toFixed(2)}€/tilaus)
- Rotana: ${tot.rot.toFixed(2)}€ (${tot.rot_kpl} kpl)
- Dubai: ${tot.dub.toFixed(2)}€ (${tot.dub_kpl} kpl)
- Arvioitu voitto: ${totalProfit.toFixed(2)}€ (kate ${profitMargin.toFixed(1)}%)
Anna vastaus suomeksi, käytännölliset neuvot.`);
                setScreen("assistant");
              }} style={{width:"100%",marginTop:8,padding:"10px",borderRadius:10,border:"none",background:"#009de0",color:"#fff",fontWeight:800,cursor:"pointer",fontSize:13}}>
                🤖 Kysy AI:lta syvällinen analyysi →
              </button>
            </div>

            {/* COST SETTINGS */}
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:18,marginBottom:14}}>
              <div style={{fontWeight:800,fontSize:14,marginBottom:4}}>⚙️ Kustannusarviot (muokkaa)</div>
              <div style={{fontSize:11,color:"#444",marginBottom:12}}>Päivitä arvot tarkempaa voittolaskelmaa varten</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                {[
                  {label:"🪑 Sali (€/tilaus)",key:"sali",val:COSTS.sali},
                  {label:"🛵 Montana Wolt",key:"mw",val:COSTS.montana_wolt},
                  {label:"🛵 Rotana",key:"rot",val:COSTS.rotana},
                  {label:"🛵 Dubai",key:"dub",val:COSTS.dubai},
                ].map(c=>(
                  <div key={c.key} style={{padding:"8px 12px",borderRadius:10,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)"}}>
                    <div style={{fontSize:10,color:"#555",marginBottom:4}}>{c.label}</div>
                    <div style={{fontSize:16,fontWeight:700,color:"#e8a020"}}>{c.val}€</div>
                    <div style={{fontSize:9,color:"#333"}}>sis. raaka-aineet</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ENTRY FORM */}
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:18,marginBottom:14}}>
              <div style={{fontWeight:800,fontSize:14,marginBottom:12}}>➕ Lisää päivän myynti</div>
              <div style={{marginBottom:8}}>
                <div style={{fontSize:11,color:"#555",marginBottom:4}}>📅 Päivämäärä</div>
                <input type="date" value={woltSales.date||new Date().toISOString().split("T")[0]} onChange={e=>setWoltSales({...woltSales,date:e.target.value})} style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#fff",fontSize:13,outline:"none",boxSizing:"border-box"}}/>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
                {[
                  {label:"🪑 Sali €",key:"sali"},{label:"🪑 Sali kpl",key:"sali_kpl"},
                  {label:"🛵 Montana Wolt €",key:"montana_wolt"},{label:"🛵 MW kpl",key:"mw_kpl"},
                  {label:"🛵 Rotana €",key:"rotana"},{label:"🛵 Rot kpl",key:"rot_kpl"},
                  {label:"🛵 Dubai €",key:"dubai"},{label:"🛵 Dub kpl",key:"dub_kpl"},
                ].map(f=>(
                  <div key={f.key}>
                    <div style={{fontSize:10,color:"#555",marginBottom:3}}>{f.label}</div>
                    <input type="number" placeholder="0" value={woltSales[f.key]||""} onChange={e=>setWoltSales({...woltSales,[f.key]:e.target.value})} style={{width:"100%",padding:"8px 10px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#fff",fontSize:13,outline:"none",boxSizing:"border-box"}}/>
                  </div>
                ))}
              </div>
              <button onClick={()=>{
                if(!woltSales.date){notify("Valitse päivämäärä!");return;}
                if(editEntry){
                  const entry={...woltSales};
                  fetch("/api/sales", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(entry)})
                    .then(()=>{
                      const updated=woltHistory.map(e=>e.date===editEntry.date?entry:e);
                      setWoltHistory(updated);localStorage.setItem("montana_wolt_history",JSON.stringify(updated));
                      setEditEntry(null);notify("✅ Päivitetty!");
                    }).catch(()=>notify("⚠️ Virhe tallennuksessa"));
                }else{
                  const entry = {...woltSales};
                  fetch("/api/sales", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(entry)})
                    .then(r=>r.json()).then(()=>{
                      const exists=woltHistory.find(e=>e.date===entry.date);
                      const updated=exists?woltHistory.map(e=>e.date===entry.date?entry:e):[...woltHistory,entry];
                      const sorted=updated.sort((a,b)=>new Date(b.date)-new Date(a.date));
                      setWoltHistory(sorted);localStorage.setItem("montana_wolt_history",JSON.stringify(sorted));
                      notify("✅ Tallennettu palvelimelle!");
                    }).catch(()=>notify("⚠️ Tallennettu vain paikallisesti"));
                }
                setWoltSales({date:new Date().toISOString().split("T")[0],sali:"",sali_kpl:"",montana_wolt:"",mw_kpl:"",rotana:"",rot_kpl:"",dubai:"",dub_kpl:""});
              }} style={{width:"100%",padding:"12px",borderRadius:10,border:"none",background:"#e8a020",color:"#000",fontWeight:800,cursor:"pointer",fontSize:14}}>
                {editEntry?"✅ Päivitä":"💾 Tallenna päivä"}
              </button>
            </div>

            {/* HISTORY */}
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:18}}>
              <div style={{fontWeight:800,fontSize:14,marginBottom:12}}>📋 Historia ({filtered.length} päivää)</div>
              {filtered.length===0?<div style={{color:"#444",fontSize:13,textAlign:"center",padding:20}}>Ei merkintöjä</div>:
              <div style={{display:"grid",gap:6}}>
                {filtered.slice(0,20).map((entry,i)=>{
                  const dayRev=(parseFloat(entry.sali)||0)+(parseFloat(entry.montana_wolt)||0)+(parseFloat(entry.rotana)||0)+(parseFloat(entry.dubai)||0);
                  const dayKpl=(parseInt(entry.sali_kpl)||0)+(parseInt(entry.mw_kpl)||0)+(parseInt(entry.rot_kpl)||0)+(parseInt(entry.dub_kpl)||0);
                  return <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 60px 50px 60px",gap:6,alignItems:"center",padding:"8px 10px",borderRadius:8,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.04)"}}>
                    <div style={{fontSize:12,color:"#888"}}>{entry.date}</div>
                    <div style={{fontSize:12,fontWeight:700,color:"#e8a020"}}>{dayRev.toFixed(0)}€</div>
                    <div style={{fontSize:11,color:"#555"}}>{dayKpl}kpl</div>
                    <div style={{display:"flex",gap:4}}>
                      <button onClick={()=>{setEditEntry(entry);setWoltSales({...entry});}} style={{padding:"3px 7px",borderRadius:5,border:"1px solid rgba(255,165,0,0.3)",background:"rgba(255,165,0,0.1)",color:"#f59e0b",cursor:"pointer",fontSize:10}}>✏️</button>
                      <button onClick={()=>{fetch("/api/sales/"+entry.date,{method:"DELETE"}).then(()=>{const u=woltHistory.filter(e=>e.date!==entry.date);setWoltHistory(u);localStorage.setItem("montana_wolt_history",JSON.stringify(u));notify("🗑️ Poistettu");}).catch(()=>notify("⚠️ Virhe"));}} style={{padding:"3px 7px",borderRadius:5,border:"1px solid rgba(239,68,68,0.3)",background:"rgba(239,68,68,0.1)",color:"#ef4444",cursor:"pointer",fontSize:10}}>🗑️</button>
                    </div>
                  </div>;
                })}
              </div>}
            </div>
          </div>
          );
        })()}

        {screen==="assistant"&&(
          <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 116px)"}}>
            <div style={{marginBottom:12}}>
              <h1 style={{fontSize:22,fontWeight:900,margin:0}}>🤖 {t.assistant}</h1>
              <div style={{color:"#555",fontSize:11,marginTop:3}}>@townravintolatoy · @montanaristorante · Montana Ravintola Facebook</div>
            </div>
            <div style={{display:"flex",gap:6,marginBottom:12,flexWrap:"wrap"}}>
              {[{key:"ig",icon:"📸",label:"Instagram"},{key:"tiktok",icon:"🎵",label:"TikTok"},{key:"wolt",icon:"⭐",label:"Wolt"},{key:"report",icon:"📊",label:lang==="ar"?"تقرير":"Raportti"},{key:"menu",icon:"🍕",label:lang==="ar"?"منيو":"Menu"},{key:"compete",icon:"🏆",label:lang==="ar"?"تميّز":"Kilpailu"}].map(btn=>(
                <button key={btn.key} onClick={()=>quickPrompt(btn.key)} disabled={!!quickKey||aiLoading} style={{padding:"7px 13px",borderRadius:16,border:"1px solid rgba(232,160,32,0.2)",background:"rgba(232,160,32,0.07)",color:"#e8a020",cursor:"pointer",fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:5,opacity:(quickKey===btn.key||aiLoading)?0.4:1}}>
                  {quickKey===btn.key?"⏳":btn.icon} {btn.label}
                </button>
              ))}
            </div>
            <div style={{flex:1,overflowY:"auto",background:"rgba(255,255,255,0.02)",borderRadius:14,padding:16,border:"1px solid rgba(255,255,255,0.06)",marginBottom:12}}>
              {chatMsgs.length===0&&(
                <div style={{textAlign:"center",padding:40,color:"#333"}}>
                  <div style={{fontSize:44,marginBottom:10}}>🤖</div>
                  <div style={{fontSize:14,fontWeight:700,color:"#555",marginBottom:6}}>{lang==="ar"?"مرحباً! اضغط أي زر أو اكتب سؤالك":"Hei! Paina painiketta tai kirjoita kysymys"}</div>
                </div>
              )}
              {chatMsgs.map((m,i)=>(
                <div key={i} style={{marginBottom:12}}>
                  {m.role==="system"?(
                    <div style={{textAlign:"center",color:"#444",fontSize:10,margin:"6px 0"}}>— {m.text} —</div>
                  ):(
                    <div style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",gap:8}}>
                      {m.role==="ai"&&<div style={{width:26,height:26,borderRadius:"50%",background:"#e8a02018",fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>🤖</div>}
                      <div style={{maxWidth:"80%",background:m.role==="user"?"rgba(232,160,32,0.12)":"rgba(255,255,255,0.05)",borderRadius:12,padding:"10px 14px",fontSize:13,lineHeight:1.65,color:m.role==="user"?"#f5c842":"#ddd",whiteSpace:"pre-wrap"}}>{m.text}</div>
                    </div>
                  )}
                </div>
              ))}
              {(aiLoading||quickKey)&&<div style={{display:"flex",gap:8,alignItems:"center"}}><div style={{width:26,height:26,borderRadius:"50%",background:"#e8a02018",fontSize:13,display:"flex",alignItems:"center",justifyContent:"center"}}>🤖</div><div style={{background:"rgba(255,255,255,0.05)",borderRadius:12,padding:"10px 14px",fontSize:13,color:"#555"}}>{t.generating}</div></div>}
              <div ref={chatRef}/>
            </div>
            <div style={{display:"flex",gap:8}}>
              <input value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&sendChat()} placeholder={t.typeMessage} style={{flex:1,padding:"12px 16px",borderRadius:11,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#fff",fontSize:14,outline:"none"}}/>
              <button onClick={sendChat} disabled={!chatInput.trim()||aiLoading} style={{padding:"12px 22px",borderRadius:11,border:"none",background:chatInput.trim()&&!aiLoading?"linear-gradient(135deg,#e8a020,#f5c842)":"#1a1a1a",color:chatInput.trim()&&!aiLoading?"#000":"#333",fontWeight:700,cursor:chatInput.trim()&&!aiLoading?"pointer":"default",fontSize:14}}>{t.send}</button>
            </div>
          </div>
        )}

        {/* CONTENT — MARKETING HUB */}
        {screen==="content"&&(()=>{
          const DISHES = [
            {name:"Pizza Montana ⭐", tip:"Näytä juusto sulavana lähikuvassa", type:"pizza"},
            {name:"Pizza Americana",  tip:"Leikkaa pizza hitaasti kameran edessä", type:"pizza"},
            {name:"Kebab Mix 🥙",     tip:"Täytä rulla hitaasti — näytä täytteet", type:"kebab"},
            {name:"Montana Burger 🍔",tip:"Puraise ja näytä sisältö", type:"burger"},
            {name:"Pizza Parma Rucola",tip:"Esittele tuoreet täytteet", type:"pizza"},
            {name:"Hot Wings 🍗",     tip:"Kastike + siipi lähikuva", type:"wings"},
            {name:"Pasta Carbonara 🍝",tip:"Haarukka pyörittää pastaa", type:"pasta"},
            {name:"Pizza Frutti di Mare",tip:"Äyriäiset lähikuvassa", type:"pizza"},
          ];
          const HASHTAGS = {
            base:"#turku #turkufood #turkueats #wolt #woltturku #montanaristorante #ravintola #lounas #visitturku #finnishfood",
            pizza:"#pizza #pizzaturku #italianofood #pizzalover #pizzatime",
            kebab:"#kebab #kebabturku #kebablover #streetfood #grilliruoka",
            burger:"#burger #burgerlover #hamburger #fastfood #burgertime",
            wings:"#hotwings #chickenwings #spicyfood #wings #kanaruoka",
            pasta:"#pasta #pastaturku #italianfood #carbonara #pastatime",
          };
          const today = new Date();
          const isWeekend = today.getDay()===0||today.getDay()===6;
          const TIMES = isWeekend?["12:00","17:00","20:00"]:["14:30","17:30","20:00"];
          const todayDish = DISHES[today.getDate()%DISHES.length];
          const todayTags = HASHTAGS.base+" "+( HASHTAGS[todayDish.type]||"");
          const dayNames=["Su","Ma","Ti","Ke","To","Pe","La"];

          const DAILY_PLAN = [
            {
              platform:"instagram", icon:"📸", name:"Instagram", color:"#e1306c",
              posts:[
                {type:"🖼️ Kuva",    time:TIMES[0], text:`🍽️ ${todayDish.name} — tuoretta ja herkullista!\n\nTule maistamaan tai tilaa Woltista 🛵\n📍 Tommilankatu 1, Turku\n⭐ Wolt 9.6/10\n${isWeekend?"La–Su 12:15–23:00":"Ma–Pe 15:00–23:30"}\n\n${todayTags} #instafood #foodporn`},
                {type:"🎬 Reels",   time:TIMES[1], text:`🎬 ${todayDish.name} — katso miten se tehdään! ✨\n\nTilaa Woltista tai tule paikan päälle!\n📍 Tommilankatu 1, Turku ⭐ Wolt 9.6/10\n\n${todayTags} #reels #reelsinstagram #foodreels #viral`},
              ]
            },
            {
              platform:"tiktok", icon:"🎵", name:"TikTok", color:"#69c9d0",
              posts:[
                {type:"🎵 Video",   time:TIMES[1], text:`${todayDish.name} 🤤 Tämä muuttaa kaiken!\n\nTilaa Woltista Turku 🛵 tai tule paikan päälle!\n⭐ Wolt 9.6/10\n\n${todayTags} #fyp #foryou #foryoupage #tiktokfood #foodtok #viral`},
                {type:"📸 Kuva",    time:TIMES[2], text:`Tiesitkö tämän? ${todayDish.name} on Turun paras! 🏆\n\nTommilankatu 1, Turku · Wolt 9.6/10 ⭐\n\n${todayTags} #fyp #foodtok #tiktokturku`},
              ]
            },
            {
              platform:"facebook", icon:"👥", name:"Facebook", color:"#1877f2",
              posts:[
                {type:"📝 Julkaisu", time:TIMES[0], text:`🍽️ Hei Turku! Tänään suosittelemme:\n\n${todayDish.name} — maistuu paremmalta kuin luulit!\n\nTule nauttimaan tai tilaa kotiin Woltista!\n📍 Tommilankatu 1, Turku\n📞 044 246 6447\n🕐 ${isWeekend?"La–Su 12:15–23:00":"Ma–Pe 15:00–23:30"}\n⭐ Wolt-arvosana 9.6/10\n\n${todayTags}`},
                {type:"🖼️ Kuva+teksti",time:TIMES[2], text:`⭐ Montana Ristorante Turku\n\n${todayDish.name} — tilaa nyt Woltista tai käy paikan päällä!\n\n🗺️ Tommilankatu 1, Turku\n📞 044 246 6447\n\n${todayTags} #facebookturku`},
              ]
            },
          ];

          const SCRIPTS = {
            pizza:`"Katso tämä pizza... tuore taikina, paras juusto, suoraan uunista. Tilaa Woltista tai tule Tommilankatu 1 — Montana Ristorante Turku!"`,
            kebab:`"Turun paras kebab on täällä! Tuore liha, tuoreet kasvikset... Tilaa Woltista tai tule maistamaan!"`,
            burger:`"Montana Burger — katso kun puristan... täydellinen! Tilaa Woltista Turku!"`,
            wings:`"Hot Wings jotka palavat sopivasti... kastike mukaan! Tilaa Woltista tai tule paikan päälle!"`,
            pasta:`"Tuore pasta, kermainen kastike... Italia kohtaa Turku! Tilaa Woltista!"`,
          };

          return (
          <div>
            <h1 style={{fontSize:22,fontWeight:900,marginBottom:4}}>📱 Markkinointikeskus</h1>
            <div style={{color:"#555",fontSize:12,marginBottom:12}}>@townravintolatoy · @montanaristorante · Montana Ravintola</div>

            {/* OPENING HOURS */}
            <div style={{background:"rgba(16,185,129,0.07)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:12,padding:14,marginBottom:14}}>
              <div style={{fontWeight:800,fontSize:12,color:"#10b981",marginBottom:8}}>🕐 Aukioloajat</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4}}>
                {[["Ma","15:00–23:30"],["Ti","15:00–23:30"],["Ke","15:00–23:30"],["To","15:00–23:30"],["Pe","15:00–23:30"],["La","12:15–23:00"],["Su","12:15–23:00"]].map(([d,h])=>{
                  const isT=d===dayNames[today.getDay()];
                  return <div key={d} style={{textAlign:"center",padding:"6px 4px",borderRadius:8,background:isT?"rgba(16,185,129,0.2)":"rgba(255,255,255,0.02)",border:isT?"1px solid rgba(16,185,129,0.4)":"1px solid transparent"}}>
                    <div style={{fontSize:11,fontWeight:800,color:isT?"#10b981":"#444"}}>{d}</div>
                    <div style={{fontSize:9,color:isT?"#10b981":"#333",marginTop:2}}>{h.split("–")[0]}</div>
                  </div>;
                })}
              </div>
            </div>

            {/* TODAY HEADER */}
            <div style={{background:"linear-gradient(135deg,rgba(232,160,32,0.15),rgba(249,115,22,0.08))",border:"2px solid rgba(232,160,32,0.4)",borderRadius:16,padding:18,marginBottom:14}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
                <div>
                  <div style={{fontWeight:900,fontSize:17,color:"#e8a020"}}>📅 {dayNames[today.getDay()]} {today.toLocaleDateString("fi-FI")}</div>
                  <div style={{color:"#888",fontSize:12,marginTop:2}}>Julkaisuajat: <span style={{color:"#e8a020",fontWeight:700}}>{TIMES.join(" · ")}</span></div>
                </div>
                <button onClick={()=>{
                  if("Notification" in window){
                    Notification.requestPermission().then(p=>{
                      if(p==="granted"){
                        TIMES.forEach(t=>{
                          const [h,m]=t.split(":").map(Number);
                          const target=new Date();target.setHours(h,m-30,0,0);
                          const diff=target-Date.now();
                          if(diff>0) setTimeout(()=>new Notification("📱 Montana — Julkaisu kohta!",{body:`Kuvaa ${todayDish.name}! Julkaise klo ${t} 🍕`,icon:"/favicon.ico"}),diff);
                        });
                        notify("✅ Muistutukset asetettu!");
                      }
                    });
                  }
                }} style={{padding:"8px 14px",borderRadius:10,border:"1px solid rgba(232,160,32,0.4)",background:"rgba(232,160,32,0.15)",color:"#e8a020",cursor:"pointer",fontWeight:700,fontSize:11}}>
                  🔔 Aseta muistutukset
                </button>
              </div>

              {/* TODAY DISH */}
              <div style={{background:"rgba(0,0,0,0.4)",borderRadius:12,padding:14,marginBottom:12}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                  <div>
                    <div style={{fontSize:11,color:"#555",fontWeight:700}}>📸 KUVAA TÄNÄÄN</div>
                    <div style={{fontSize:20,fontWeight:900,color:"#fff",marginTop:4}}>{todayDish.name}</div>
                    <div style={{fontSize:12,color:"#e8a020",marginTop:3}}>💡 {todayDish.tip}</div>
                  </div>
                </div>
                <div style={{fontSize:11,color:"#444",fontWeight:700,marginBottom:5}}>🎬 VIDEO-SKRIPTI (15 sek)</div>
                <div style={{fontSize:12,color:"#888",lineHeight:1.7,fontStyle:"italic",background:"rgba(255,255,255,0.03)",padding:"8px 12px",borderRadius:8}}>
                  {SCRIPTS[todayDish.type]||SCRIPTS.pizza}
                </div>
              </div>

              {/* TODAY HASHTAGS */}
              <div style={{background:"rgba(0,0,0,0.3)",borderRadius:10,padding:12,marginBottom:12}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                  <div style={{fontSize:11,color:"#555",fontWeight:700}}>#️⃣ TÄNÄÄN HASHTAGIT</div>
                  <button onClick={()=>{navigator.clipboard.writeText(todayTags);notify("✅ Hashtagit kopioitu!");}} style={{padding:"3px 10px",borderRadius:6,border:"none",background:"rgba(232,160,32,0.2)",color:"#e8a020",cursor:"pointer",fontSize:10,fontWeight:700}}>📋 Kopioi</button>
                </div>
                <div style={{fontSize:11,color:"#666",lineHeight:1.8}}>{todayTags}</div>
              </div>
            </div>

            {/* DAILY PLAN PER PLATFORM */}
            {DAILY_PLAN.map(platform=>(
              <div key={platform.platform} style={{background:"rgba(255,255,255,0.02)",border:`1px solid ${platform.color}25`,borderRadius:16,padding:18,marginBottom:12}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                  <span style={{fontSize:22}}>{platform.icon}</span>
                  <div style={{fontWeight:800,fontSize:15,color:platform.color}}>{platform.name}</div>
                  <span style={{fontSize:11,color:"#444",marginLeft:"auto"}}>{platform.posts.length} julkaisua tänään</span>
                </div>
                <div style={{display:"grid",gap:10}}>
                  {platform.posts.map((post,i)=>(
                    <div key={i} style={{background:"rgba(0,0,0,0.3)",borderRadius:12,padding:14,border:`1px solid ${platform.color}20`}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                        <div style={{display:"flex",gap:8,alignItems:"center"}}>
                          <span style={{fontSize:13,fontWeight:800,color:platform.color}}>{post.type}</span>
                          <span style={{fontSize:11,background:`${platform.color}20`,color:platform.color,padding:"2px 8px",borderRadius:6,fontWeight:700}}>🕐 {post.time}</span>
                        </div>
                        <button onClick={()=>{navigator.clipboard.writeText(post.text);notify(`✅ ${platform.name} ${post.type} teksti kopioitu!`);}} style={{padding:"5px 12px",borderRadius:8,border:`1px solid ${platform.color}40`,background:`${platform.color}15`,color:platform.color,cursor:"pointer",fontSize:11,fontWeight:700}}>📋 Kopioi</button>
                      </div>
                      <div style={{fontSize:11,color:"#555",lineHeight:1.8,whiteSpace:"pre-line"}}>{post.text}</div>
                    </div>
                  ))}
                </div>
                <button onClick={()=>{
                  setChatInput(`Luo ${platform.name}-julkaisusuunnitelma tämän päivän ruoalle: ${todayDish.name}. Montana Ristorante, Tommilankatu 1 Turku, Wolt 9.6/10, aukioloajat ${isWeekend?"la-su 12:15-23:00":"ma-pe 15:00-23:30"}. Luo ${platform.posts.length} erilaista julkaisutekstiä ${platform.name}iin suomeksi, sisältäen hashtagit: ${todayTags}`);
                  setScreen("assistant");
                }} style={{width:"100%",marginTop:10,padding:"9px",borderRadius:10,border:`1px solid ${platform.color}30`,background:`${platform.color}08`,color:platform.color,cursor:"pointer",fontSize:12,fontWeight:700}}>
                  🤖 Luo AI-versio {platform.name}iin →
                </button>
              </div>
            ))}

            {/* WEEKLY OVERVIEW */}
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:18,marginBottom:12}}>
              <div style={{fontWeight:800,fontSize:14,marginBottom:12}}>📆 Viikon julkaisusuunnitelma</div>
              <div style={{display:"grid",gap:5}}>
                {Array.from({length:7},(_,i)=>{
                  const d=new Date(today);d.setDate(today.getDate()-today.getDay()+1+i);
                  const dish=DISHES[d.getDate()%DISHES.length];
                  const isT=d.toDateString()===today.toDateString();
                  const isPast=d<new Date(today.toDateString());
                  const wend=d.getDay()===0||d.getDay()===6;
                  return <div key={i} style={{display:"grid",gridTemplateColumns:"30px 1fr 120px 60px",gap:8,alignItems:"center",padding:"9px 12px",borderRadius:10,background:isT?"rgba(232,160,32,0.1)":"rgba(255,255,255,0.01)",border:isT?"1px solid rgba(232,160,32,0.3)":"1px solid rgba(255,255,255,0.03)",opacity:isPast?0.35:1}}>
                    <div style={{fontSize:11,fontWeight:800,color:isT?"#e8a020":"#555"}}>{dayNames[d.getDay()]}</div>
                    <div style={{fontSize:12,color:isT?"#fff":"#666"}}>{dish.name}</div>
                    <div style={{display:"flex",gap:4}}>
                      <span style={{fontSize:9,color:"#e1306c",fontWeight:600}}>📸IG</span>
                      <span style={{fontSize:9,color:"#69c9d0",fontWeight:600}}>🎵TT</span>
                      <span style={{fontSize:9,color:"#1877f2",fontWeight:600}}>👥FB</span>
                    </div>
                    <div style={{fontSize:10,color:"#444"}}>{wend?"12:15":"15:00"}</div>
                  </div>;
                })}
              </div>
            </div>

            {/* HASHTAG BANK */}
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:18}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                <div style={{fontWeight:800,fontSize:14}}>#️⃣ Hashtag-pankki</div>
                <button onClick={()=>{navigator.clipboard.writeText(HASHTAGS.base+" "+Object.values(HASHTAGS).slice(1).join(" "));notify("✅ Kaikki hashtagit kopioitu!");}} style={{padding:"5px 12px",borderRadius:8,border:"none",background:"rgba(232,160,32,0.2)",color:"#e8a020",cursor:"pointer",fontSize:11,fontWeight:700}}>📋 Kopioi kaikki</button>
              </div>
              <div style={{display:"grid",gap:8}}>
                {[["🌍 Yleiset",HASHTAGS.base],["🍕 Pizza",HASHTAGS.pizza],["🥙 Kebab",HASHTAGS.kebab],["🍔 Burger",HASHTAGS.burger],["🍗 Wings",HASHTAGS.wings],["🍝 Pasta",HASHTAGS.pasta]].map(([label,tags])=>(
                  <div key={label} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"rgba(255,255,255,0.02)",borderRadius:8}}>
                    <div>
                      <div style={{fontSize:11,fontWeight:700,color:"#666",marginBottom:3}}>{label}</div>
                      <div style={{fontSize:10,color:"#444"}}>{tags}</div>
                    </div>
                    <button onClick={()=>{navigator.clipboard.writeText(tags);notify(`✅ ${label} kopioitu!`);}} style={{padding:"4px 10px",borderRadius:7,border:"1px solid rgba(232,160,32,0.3)",background:"rgba(232,160,32,0.1)",color:"#e8a020",cursor:"pointer",fontSize:10,fontWeight:700,whiteSpace:"nowrap",marginLeft:8}}>📋</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          );
        })()}

        {/* SETTINGS */}
        {screen==="settings"&&(
          <div>
            <h1 style={{fontSize:22,fontWeight:900,marginBottom:20}}>⚙️ {t.settings}</h1>
            {[
              {title:lang==="ar"?"المطاعم الأربعة":"4 Menua",content:(
                <div style={{display:"grid",gap:7}}>
                  {Object.entries(RESTS).map(([id,r])=>(
                    <div key={id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 13px",background:"rgba(255,255,255,0.03)",borderRadius:9}}>
                      <div style={{display:"flex",alignItems:"center",gap:10}}><span style={{fontSize:20}}>{r.emoji}</span><div><div style={{fontSize:13,fontWeight:600}}>{r.name}</div><div style={{fontSize:11,color:"#444"}}>{MENU[id]?.length||0} {lang==="ar"?"صنف":"tuotetta"} · {r.type==="inside"?(lang==="ar"?"أسعار داخلية":"Sisäiset hinnat"):"Wolt"}</div></div></div>
                      <span style={{fontSize:11,color:r.color,fontWeight:700}}>✅</span>
                    </div>
                  ))}
                </div>
              )},
              {title:lang==="ar"?"الطابعة":"Tulostin",content:(
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 14px",background:"rgba(16,185,129,0.07)",borderRadius:9,border:"1px solid rgba(16,185,129,0.18)"}}>
                    <div><div style={{fontWeight:700,fontSize:13}}>SEWOO SLK-TE323</div><div style={{color:"#555",fontSize:11,marginTop:2}}>USB · ESC/POS · 80mm Thermal · 300mm/s</div></div>
                    <div style={{color:"#10b981",fontSize:12,fontWeight:700}}>✅ {lang==="ar"?"جاهز":"Valmis"}</div>
                  </div>
                </div>
              )},
              {title:lang==="ar"?"منصات التواصل":"Some-tilit",content:(
                <div style={{display:"grid",gap:6}}>
                  {[["📸","Instagram","@townravintolatoy","#e1306c"],["🎵","TikTok","@montanaristorante","#69c9d0"],["👥","Facebook","Montana Ravintola","#1877f2"],["🛵","Wolt","Montana + Rotana + Dubai · 9.6⭐","#009de0"]].map(([ico,p,h,c])=>(
                    <div key={p} style={{display:"flex",justifyContent:"space-between",padding:"8px 12px",background:"rgba(255,255,255,0.03)",borderRadius:8}}><span style={{fontSize:13}}>{ico} {p}</span><span style={{fontSize:11,color:c,fontWeight:700}}>{h}</span></div>
                  ))}
                </div>
              )},
              {title:lang==="ar"?"اللغة":"Kieli",content:(
                <div style={{display:"flex",gap:10}}>
                  {[["fi","🇫🇮 Suomi"],["ar","🇸🇦 العربية"]].map(([l,lb])=>(
                    <button key={l} onClick={()=>setLang(l)} style={{flex:1,padding:"11px 0",borderRadius:10,border:"1px solid",borderColor:lang===l?"#e8a020":"rgba(255,255,255,0.1)",background:lang===l?"rgba(232,160,32,0.15)":"transparent",color:lang===l?"#e8a020":"#555",cursor:"pointer",fontWeight:700,fontSize:14}}>{lb}</button>
                  ))}
                </div>
              )},
            ].map((s,i)=>(
              <div key={i} style={{background:"rgba(255,255,255,0.03)",borderRadius:13,padding:18,marginBottom:12,border:"1px solid rgba(255,255,255,0.06)"}}>
                <h3 style={{fontSize:11,fontWeight:700,color:"#555",marginBottom:12,textTransform:"uppercase",letterSpacing:1.5}}>{s.title}</h3>
                {s.content}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
