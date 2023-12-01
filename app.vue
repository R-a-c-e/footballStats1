<template>
	<Head></Head>
	<div class="grid grid-cols-5 mt-10">
		<div class="col-start-2 col-span-1">
			<div class="w-full px-5">
				<div>
					<select id="selectedYear" v-model="selectedYear" class="w-full border-2">
						<option value="" disabled>Select a Year</option>
						<option v-for="year in years" :key="year" :value="year">{{ year }}</option>
						<p v-if="selectedYear">you selected: {{ selectedYear }}</p>
					</select>
				</div>
			</div>
		</div>
		<div class="col-start-3 col-span-1">
			<div class="w-full px-5">
				<div>
					<select id="selectedSide" v-model="selectedSide" class="w-full border-2">
						<option value="" disabled>Select a Side</option>
						<option v-for="side in sides" :key="side" :value="side">{{ side }}</option>
					</select>
				</div>
			</div>
		</div>
		<div class="col-start-4 col-span-1">
			<div class="w-full px-5">
				<select v-if="selectedSide === 'Offense'" id="selectedStat" v-model="selectedStat" class="w-full border-2">
					<option value="" disabled>Select a Stat</option>
					<option v-for="stat in offenseOptions" :key="stat" :value="stat">{{ stat }}</option>
				</select>
				<select v-if="selectedSide === 'Defense'" id="selectedStat" v-model="selectedStat" class="w-full border-2">
					<option value="" disabled>Select a Stat</option>
					<option v-for="stat in defenseOptions" :key="stat" :value="stat">{{ stat }}</option>
				</select>
				<select v-if="selectedSide === 'Special'" id="selectedStat" v-model="selectedStat" class="w-full border-2">
					<option value="" disabled>Select a Stat</option>
					<option v-for="stat in specialOptions" :key="stat" :value="stat">{{ stat }}</option>
				</select>
			</div>
		</div>
	</div>
</template>


<script setup>
import Head from './components/Head.vue';
//import {Client} from 'pg';
//import { Pool } from 'pg'
//import {ref} from 'vue';
// Selected Filters
let selectedYear = ref('');
let selectedSide = ref('');
let selectedStat = ref('');

// filter Options
const years = ref([2022, 2021, 2020, 2019, 2018, 2017,
	2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007,
	2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997,
	1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987,
	1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977,
	1976, 1975, 1974, 1973, 1972, 1971, 1970
]);
const sides = ref(['Offense', 'Defense', 'Special'])
const offenseOptions = ref([
	'Passing', 'Rushing', 'Scoring'
]);
const defenseOptions = ref([
	'Passing', 'Rushing', 'Takeaways'
]);
const specialOptions = ref([
	'Scoring', 'Kickoffs', 'Punting'
]);


/*
const client = new Client({
	user: 'postgres',
	host: 'localhost',
	database: 'football_stats',
	password: 'password',
	port: 5432
});
client.connect();
let side = await client.query('SELECT * FROM side')
let defense_turnovers = await client.query('SELECT * FROM defense_turnovers ')
let teams = await client.query('SELECT * FROM team ')
await client.end()

const attribute = 's_name'
const attribute2 = 't_name'

watch(selectedSide, (newValue) => {
  console.log('selectedSide changed:', newValue);
});*/

</script>
