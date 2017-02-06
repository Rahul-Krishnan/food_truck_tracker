/* jshint esversion: 6 */
import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

class TruckApp extends Component {
  constructor(props) {
    super(props);
    this.rows = [{"truck": "Baja Taco Truck", "location": "Greenway, Rowes Wharf Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Baja Taco Truck", "location": "Greenway, Rowes Wharf Plaza", "day": "Thursday", "time": "Lunch"},
      {"truck": "Baja Taco Truck", "location": "Clarendon St at Trinity Church", "day": "Thursday", "time": "Dinner"},
      {"truck": "Baja Taco Truck", "location": "Financial District, Pearl Street at Franklin", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Baja Taco Truck", "location": "Clarendon St at Trinity Church", "day": "Tuesday", "time": "Dinner"},
      {"truck": "BigDaddy Hotdogs", "location": "Clarendon St at Trinity Church", "day": "Saturday", "time": "Lunch"},
      {"truck": "Blazing Salads", "location": "Financial District, Pearl Street at Franklin", "day": "Monday", "time": "Lunch"},
      {"truck": "Blazing Salads", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "Greenway, Dewey Square Park Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "West End, Blossom St at Emerson Place, behind MGH", "day": "Friday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Friday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "Greenway, Rowes Wharf Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "West End, Blossom St at Emerson Place, behind MGH", "day": "Friday", "time": "Dinner"},
      {"truck": "Bon Me", "location": "Greenway, Dewey Square Park Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "Greenway, Rowes Wharf Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "NEU, on Opera Place at Huntington Ave", "day": "Monday", "time": "Dinner"},
      {"truck": "Bon Me", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Saturday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "Greenway, Dewey Square Park Plaza", "day": "Thursday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Thursday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "Greenway, Rowes Wharf Plaza", "day": "Thursday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "Greenway, Dewey Square Park Plaza", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "Greenway, Rowes Wharf Plaza", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "Boston Public Library", "day": "Tuesday", "time": "Dinner"},
      {"truck": "Bon Me", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Tuesday", "time": "Dinner"},
      {"truck": "Bon Me", "location": "Greenway, Dewey Square Park Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "NEU, on Opera Place at Huntington Ave", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "Greenway, Rowes Wharf Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Bon Me", "location": "Boston University - East, on Commonwealth Ave at Silber Way", "day": "Wednesday", "time": "Dinner"},
      {"truck": "Boston Burger Company", "location": "West End, Blossom St at Emerson Place, behind MGH", "day": "Monday", "time": "Lunch"},
      {"truck": "Boston's Baddest Burger & Sandwich Co.", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Capriotti's", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Monday", "time": "Lunch"},
      {"truck": "Capriotti's", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Captain Marden's Cod Squad", "location": "Innovation District, Seaport Blvd at Boston Wharf Rd", "day": "Thursday", "time": "Lunch"},
      {"truck": "Captain Marden's Cod Squad", "location": "Boston Public Library", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Chicken & Rice Guys", "location": "Greenway, Dewey Square Park Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Chicken & Rice Guys", "location": "Innovation District, Seaport Blvd at Boston Wharf Rd", "day": "Friday", "time": "Lunch"},
      {"truck": "Chicken & Rice Guys", "location": "Greenway, Rowes Wharf Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "Chicken & Rice Guys", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Monday", "time": "Dinner"},
      {"truck": "Chicken & Rice Guys", "location": "Greenway - Carousel", "day": "Thursday", "time": "Lunch"},
      {"truck": "Chicken & Rice Guys", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Thursday", "time": "Dinner"},
      {"truck": "Chicken & Rice Guys", "location": "Greenway, Chinatown Park", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Chicken & Rice Guys", "location": "NEU, on Opera Place at Huntington Ave", "day": "Tuesday", "time": "Dinner"},
      {"truck": "Chicken & Rice Guys", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Chicken & Rice Guys", "location": "Greenway, Rings Fountain at Milk St", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Chik Chak", "location": "Greenway, Rowes Wharf Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Chik Chak", "location": "Greenway, Chinatown Park", "day": "Monday", "time": "Lunch"},
      {"truck": "Chik Chak", "location": "Boston Public Library", "day": "Thursday", "time": "Lunch"},
      {"truck": "Chik Chak", "location": "Greenway, Rings Fountain at Milk St", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Chili Mango & Lime", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Friday", "time": "Lunch"},
      {"truck": "Chili Mango & Lime", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Monday", "time": "Lunch"},
      {"truck": "Chubby Chickpea", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Friday", "time": "Lunch"},
      {"truck": "Chubby Chickpea", "location": "Greenway, Rowes Wharf Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "Chubby Chickpea", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Thursday", "time": "Lunch"},
      {"truck": "Chubby Chickpea", "location": "Greenway, Rowes Wharf Plaza", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Clover", "location": "Greenway, Dewey Square Park Plaza", "day": "Friday", "time": "Breakfast"},
      {"truck": "Clover", "location": "Greenway, Dewey Square Park Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Clover", "location": "Greenway, Dewey Square Park Plaza", "day": "Monday", "time": "Breakfast"},
      {"truck": "Clover", "location": "Greenway, Dewey Square Park Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "Clover", "location": "Greenway, Dewey Square Park Plaza", "day": "Saturday", "time": "Breakfast"},
      {"truck": "Clover", "location": "Greenway, Dewey Square Park Plaza", "day": "Saturday", "time": "Lunch"},
      {"truck": "Clover", "location": "Greenway, Dewey Square Park Plaza", "day": "Thursday", "time": "Breakfast"},
      {"truck": "Clover", "location": "Greenway, Dewey Square Park Plaza", "day": "Thursday", "time": "Lunch"},
      {"truck": "Clover", "location": "Greenway, Dewey Square Park Plaza", "day": "Tuesday", "time": "Breakfast"},
      {"truck": "Clover", "location": "Greenway, Dewey Square Park Plaza", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Clover", "location": "Greenway, Dewey Square Park Plaza", "day": "Wednesday", "time": "Breakfast"},
      {"truck": "Clover", "location": "Greenway, Dewey Square Park Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Compliments", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Monday", "time": "Lunch"},
      {"truck": "Compliments", "location": "Clarendon St at Trinity Church", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Cookie Monstah", "location": "Greenway, Dewey Square Park Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Cookie Monstah", "location": "Greenway - Carousel", "day": "Friday", "time": "Lunch"},
      {"truck": "Cookie Monstah", "location": "Greenway - Carousel", "day": "Monday", "time": "Lunch"},
      {"truck": "Cookie Monstah", "location": "Greenway - Carousel", "day": "Saturday", "time": "Lunch"},
      {"truck": "Cookie Monstah", "location": "Clarendon St at Trinity Church", "day": "Saturday", "time": "Dinner"},
      {"truck": "Cookie Monstah", "location": "Greenway - Carousel", "day": "Sunday", "time": "Lunch"},
      {"truck": "Cookie Monstah", "location": "Financial District, Pearl Street at Franklin", "day": "Thursday", "time": "Lunch"},
      {"truck": "Cookie Monstah", "location": "Greenway - Carousel", "day": "Thursday", "time": "Lunch"},
      {"truck": "Cookie Monstah", "location": "Greenway - Carousel", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Cookie Monstah", "location": "Greenway, Dewey Square Park Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Cookie Monstah", "location": "Greenway - Carousel", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Cupcake City", "location": "Greenway, Rings Fountain at Milk St", "day": "Monday", "time": "Lunch"},
      {"truck": "Cupcake City", "location": "Greenway, Rowes Wharf Plaza", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Cupcake City", "location": "Greenway, Rowes Wharf Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Daddy's Bonetown Burgers", "location": "Clarendon St at Trinity Church", "day": "Friday", "time": "Lunch"},
      {"truck": "Daddy's Bonetown Burgers", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Thursday", "time": "Lunch"},
      {"truck": "Dragon Roll", "location": "NEU, on Opera Place at Huntington Ave", "day": "Friday", "time": "Lunch"},
      {"truck": "Dragon Roll", "location": "NEU, on Opera Place at Huntington Ave", "day": "Friday", "time": "Dinner"},
      {"truck": "Dragon Roll", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Monday", "time": "Dinner"},
      {"truck": "Dragon Roll", "location": "Financial District, Milk and Kilby Streets", "day": "Thursday", "time": "Lunch"},
      {"truck": "Dragon Roll", "location": "West End, Blossom St at Emerson Place, behind MGH", "day": "Tuesday", "time": "Dinner"},
      {"truck": "Fresh Food Generation", "location": "Dudley Square at Dudley street", "day": "Friday", "time": "Lunch"},
      {"truck": "Fresh Food Generation", "location": "Dorchester, Ashmont Station on Dorchester Ave", "day": "Friday", "time": "Dinner"},
      {"truck": "Frozen Hoagies", "location": "Greenway, Rowes Wharf Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Frozen Hoagies", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Monday", "time": "Lunch"},
      {"truck": "Frozen Hoagies", "location": "Greenway, Rowes Wharf Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "Frozen Hoagies", "location": "West End, Blossom St at Emerson Place, behind MGH", "day": "Monday", "time": "Dinner"},
      {"truck": "Frozen Hoagies", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Thursday", "time": "Lunch"},
      {"truck": "Frozen Hoagies 2", "location": "NEU, on Opera Place at Huntington Ave", "day": "Monday", "time": "Lunch"},
      {"truck": "Gogi on the Block", "location": "Greenway, Rings Fountain at Milk St", "day": "Friday", "time": "Lunch"},
      {"truck": "Gogi on the Block", "location": "Greenway, Rowes Wharf Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Heritage Truck Company", "location": "Financial District, Milk and Kilby Streets", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Heritage Truck Company", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Indulge India", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Monday", "time": "Lunch"},
      {"truck": "Indulge India", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Jamaica Mi Hungry", "location": "Greenway, Rings Fountain at Milk St", "day": "Friday", "time": "Lunch"},
      {"truck": "Jamaica Mi Hungry", "location": "Greenway, Rowes Wharf Plaza", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Jamaica Mi Hungry", "location": "Greenway - Carousel", "day": "Wednesday", "time": "Lunch"},
      {"truck": "KimKim BBQ", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Monday", "time": "Lunch"},
      {"truck": "KimKim BBQ", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Thursday", "time": "Lunch"},
      {"truck": "KimKim BBQ", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Tuesday", "time": "Lunch"},
      {"truck": "KimKim BBQ", "location": "Boston University - East, on Commonwealth Ave at Silber Way", "day": "Tuesday", "time": "Dinner"},
      {"truck": "KimKim BBQ", "location": "Hurley Building, New Chardon and Cambridge St", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Makin' Jamaican", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Friday", "time": "Lunch"},
      {"truck": "Makin' Jamaican", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Mediterranean Home Cooking", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Friday", "time": "Lunch"},
      {"truck": "Mediterranean Home Cooking", "location": "Charlestown Navy Yard at Baxter Road", "day": "Monday", "time": "Lunch"},
      {"truck": "Mediterranean Home Cooking", "location": "Financial District, Milk and Kilby Streets", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Mediterranean Home Cooking", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Wednesday", "time": "Dinner"},
      {"truck": "Mei Mei Street Kitchen", "location": "Greenway, Dewey Square Park Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Mei Mei Street Kitchen", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Monday", "time": "Lunch"},
      {"truck": "Mei Mei Street Kitchen", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Thursday", "time": "Lunch"},
      {"truck": "Mei Mei Street Kitchen", "location": "Greenway, Dewey Square Park Plaza", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Meng's Kitchen", "location": "NEU, on Opera Place at Huntington Ave", "day": "Friday", "time": "Lunch"},
      {"truck": "Meng's Kitchen", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Friday", "time": "Dinner"},
      {"truck": "Meng's Kitchen", "location": "NEU, on Opera Place at Huntington Ave", "day": "Saturday", "time": "Lunch"},
      {"truck": "Meng's Kitchen", "location": "NEU, on Opera Place at Huntington Ave", "day": "Saturday", "time": "Dinner"},
      {"truck": "Meng's Kitchen", "location": "NEU, on Opera Place at Huntington Ave", "day": "Thursday", "time": "Lunch"},
      {"truck": "Meng's Kitchen", "location": "NEU, on Opera Place at Huntington Ave", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Mo' Rockin Fusion", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Friday", "time": "Lunch"},
      {"truck": "Mo' Rockin Fusion", "location": "NEU, on Opera Place at Huntington Ave", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Mo' Rockin Fusion", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Momogoose", "location": "Greenway, Dewey Square Park at Congress St", "day": "Friday", "time": "Lunch"},
      {"truck": "Momogoose", "location": "Financial District, Milk and Kilby Streets", "day": "Friday", "time": "Lunch"},
      {"truck": "Momogoose", "location": "Greenway, Dewey Square Park at Congress St", "day": "Monday", "time": "Lunch"},
      {"truck": "Momogoose", "location": "Clarendon St at Trinity Church", "day": "Sunday", "time": "Lunch"},
      {"truck": "Momogoose", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Momogoose", "location": "Greenway, Dewey Square Park at Congress St", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Morning Salute", "location": "Boston Public Library", "day": "Friday", "time": "Breakfast"},
      {"truck": "Morning Salute", "location": "Boston Public Library", "day": "Friday", "time": "Lunch"},
      {"truck": "Morning Salute", "location": "Boston Public Library", "day": "Wednesday", "time": "Breakfast"},
      {"truck": "Moyzilla", "location": "Greenway, Rowes Wharf Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Moyzilla", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Monday", "time": "Lunch"},
      {"truck": "Moyzilla", "location": "Greenway, Rings Fountain at Milk St", "day": "Thursday", "time": "Lunch"},
      {"truck": "Moyzilla", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Moyzilla", "location": "Clarendon St at Trinity Church", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Moyzilla", "location": "Greenway, Dewey Square Park Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Munch Mobile", "location": "Greenway, Dewey Square Park at Congress St", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Munch Mobile", "location": "Greenway, Rowes Wharf Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Northeast of the Border", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Friday", "time": "Lunch"},
      {"truck": "Northeast of the Border", "location": "Greenway, Dewey Square Park at Congress St", "day": "Friday", "time": "Lunch"},
      {"truck": "Northeast of the Border", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Monday", "time": "Lunch"},
      {"truck": "Northeast of the Border", "location": "Greenway - Carousel", "day": "Monday", "time": "Lunch"},
      {"truck": "Northeast of the Border", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Thursday", "time": "Lunch"},
      {"truck": "Northeast of the Border", "location": "Greenway, Rings Fountain at Milk St", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Papi's Stuffed Sopapillias", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Pennypackers", "location": "Financial District, Milk and Kilby Streets", "day": "Friday", "time": "Lunch"},
      {"truck": "Pennypackers", "location": "Clarendon St at Trinity Church", "day": "Monday", "time": "Lunch"},
      {"truck": "Pennypackers", "location": "Greenway, Dewey Square Park at Congress St", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Pennypackers", "location": "Greenway, Dewey Square Park Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Posto Mobile", "location": "Innovation District, Seaport Blvd at Boston Wharf Rd", "day": "Monday", "time": "Lunch"},
      {"truck": "Posto Mobile", "location": "West End, Blossom St at Emerson Place, behind MGH", "day": "Thursday", "time": "Lunch"},
      {"truck": "Posto Mobile", "location": "Greenway, Rowes Wharf Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Quebrada Baking Co.", "location": "Greenway, Dewey Square Park Plaza", "day": "Friday", "time": "Breakfast"},
      {"truck": "Quebrada Baking Co.", "location": "Greenway, Dewey Square Park Plaza", "day": "Monday", "time": "Breakfast"},
      {"truck": "Quebrada Baking Co.", "location": "Financial District, Milk and Kilby Streets", "day": "Thursday", "time": "Breakfast"},
      {"truck": "Quebrada Baking Co.", "location": "Financial District, Milk and Kilby Streets", "day": "Tuesday", "time": "Breakfast"},
      {"truck": "Quebrada Baking Co.", "location": "Greenway, Dewey Square Park Plaza", "day": "Wednesday", "time": "Breakfast"},
      {"truck": "Redbones Barbeque", "location": "Financial District, Milk and Kilby Streets", "day": "Thursday", "time": "Lunch"},
      {"truck": "Redbones Barbeque", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Riceburg", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Monday", "time": "Lunch"},
      {"truck": "Riceburg", "location": "NEU, on Opera Place at Huntington Ave", "day": "Thursday", "time": "Dinner"},
      {"truck": "Riceburg", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Riceburg", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Wednesday", "time": "Dinner"},
      {"truck": "Roxy's Gourmet Grilled Cheese", "location": "Greenway, Dewey Square Park Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Roxy's Gourmet Grilled Cheese", "location": "Greenway, Dewey Square Park Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "Roxy's Gourmet Grilled Cheese", "location": "Boston University - East, on Commonwealth Ave at Silber Way", "day": "Monday", "time": "Lunch"},
      {"truck": "Roxy's Gourmet Grilled Cheese", "location": "Greenway, Rowes Wharf Plaza", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Roxy's Gourmet Grilled Cheese", "location": "Boston Public Library", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Roxy's Gourmet Grilled Cheese", "location": "Clarendon St at Trinity Church", "day": "Wednesday", "time": "Dinner"},
      {"truck": "Roxy's Gourmet Grilled Cheese", "location": "NEU, on Opera Place at Huntington Ave", "day": "Wednesday", "time": "Dinner"},
      {"truck": "Sabroso Taqueria", "location": "Greenway, Dewey Square Park Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Sabroso Taqueria", "location": "Greenway, Dewey Square Park at Congress St", "day": "Monday", "time": "Lunch"},
      {"truck": "Sabroso Taqueria", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Thursday", "time": "Lunch"},
      {"truck": "Sabroso Taqueria", "location": "Innovation District, Seaport Blvd at Boston Wharf Rd", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Saigon Alley", "location": "Financial District, Milk and Kilby Streets", "day": "Monday", "time": "Lunch"},
      {"truck": "Saigon Alley", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Thursday", "time": "Lunch"},
      {"truck": "Saigon Alley", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Savory Food Truck 1", "location": "Chinatown, Boylston St near Washington St", "day": "Friday", "time": "Lunch"},
      {"truck": "Savory Food Truck 1", "location": "NEU, on Opera Place at Huntington Ave", "day": "Monday", "time": "Lunch"},
      {"truck": "Savory Food Truck 1", "location": "Chinatown, Boylston St near Washington St", "day": "Monday", "time": "Lunch"},
      {"truck": "Savory Food Truck 1", "location": "NEU, on Opera Place at Huntington Ave", "day": "Saturday", "time": "Lunch"},
      {"truck": "Savory Food Truck 1", "location": "Chinatown, Boylston St near Washington St", "day": "Saturday", "time": "Lunch"},
      {"truck": "Savory Food Truck 1", "location": "NEU, on Opera Place at Huntington Ave", "day": "Saturday", "time": "Dinner"},
      {"truck": "Savory Food Truck 1", "location": "Chinatown, Boylston St near Washington St", "day": "Saturday", "time": "Dinner"},
      {"truck": "Savory Food Truck 1", "location": "NEU, on Opera Place at Huntington Ave", "day": "Thursday", "time": "Lunch"},
      {"truck": "Savory Food Truck 1", "location": "Chinatown, Boylston St near Washington St", "day": "Thursday", "time": "Lunch"},
      {"truck": "Savory Food Truck 1", "location": "NEU, on Opera Place at Huntington Ave", "day": "Thursday", "time": "Dinner"},
      {"truck": "Savory Food Truck 1", "location": "Chinatown, Boylston St near Washington St", "day": "Thursday", "time": "Dinner"},
      {"truck": "Savory Food Truck 1", "location": "Chinatown, Boylston St near Washington St", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Savory Food Truck 1", "location": "NEU, on Opera Place at Huntington Ave", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Savory Food Truck 1", "location": "Chinatown, Boylston St near Washington St", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Savory Food Truck 2", "location": "Boston University - West, on Commonwealth Ave, adjacent to 855 Commonwealth Ave", "day": "Monday", "time": "Lunch"},
      {"truck": "Savory Food Truck 2", "location": "NEU, on Opera Place at Huntington Ave", "day": "Monday", "time": "Lunch"},
      {"truck": "Savory Food Truck 2", "location": "NEU, on Opera Place at Huntington Ave", "day": "Saturday", "time": "Lunch"},
      {"truck": "Savory Food Truck 2", "location": "NEU, on Opera Place at Huntington Ave", "day": "Saturday", "time": "Dinner"},
      {"truck": "Savory Food Truck 2", "location": "NEU, on Opera Place at Huntington Ave", "day": "Thursday", "time": "Dinner"},
      {"truck": "Savory Food Truck 2", "location": "NEU, on Opera Place at Huntington Ave", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Sheherazad", "location": "Financial District, Pearl Street at Franklin", "day": "Friday", "time": "Lunch"},
      {"truck": "Sheherazad", "location": "Greenway, Dewey Square Park Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "Sheherazad", "location": "Greenway, Dewey Square Park at Congress St", "day": "Thursday", "time": "Lunch"},
      {"truck": "Sheherazad", "location": "Greenway, Rowes Wharf Plaza", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Slide By Food Truck", "location": "NEU, on Opera Place at Huntington Ave", "day": "Thursday", "time": "Lunch"},
      {"truck": "Slide By Food Truck", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Slide By Food Truck", "location": "Clarendon St at Trinity Church", "day": "Wednesday", "time": "Dinner"},
      {"truck": "Spiceventure", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Monday", "time": "Lunch"},
      {"truck": "Stoked Wood Fired Pizza Co.", "location": "Greenway, Dewey Square Park Plaza", "day": "Friday", "time": "Lunch"},
      {"truck": "Stoked Wood Fired Pizza Co.", "location": "Clarendon St at Trinity Church", "day": "Thursday", "time": "Lunch"},
      {"truck": "Stoked Wood Fired Pizza Co.", "location": "Greenway, Dewey Square Park Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Sweet Bubble", "location": "Boston Public Library", "day": "Friday", "time": "Dinner"},
      {"truck": "Sweet Bubble", "location": "Clarendon St at Trinity Church", "day": "Sunday", "time": "Dinner"},
      {"truck": "Sweet Bubble", "location": "Boston Public Library", "day": "Thursday", "time": "Dinner"},
      {"truck": "Sweet Bubble", "location": "Boston Public Library", "day": "Wednesday", "time": "Dinner"},
      {"truck": "Sweet Tomatoes Pizza", "location": "Boston Public Library", "day": "Monday", "time": "Lunch"},
      {"truck": "Sweet Tomatoes Pizza", "location": "Boston University - East, on Commonwealth Ave at Silber Way", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Taco Party", "location": "Greenway, Dewey Square Park Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "Taco Party", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Taco Party", "location": "Financial District, Pearl Street at Franklin", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Tea Station", "location": "Clarendon St at Trinity Church", "day": "Friday", "time": "Dinner"},
      {"truck": "Tea Station", "location": "Boston Public Library", "day": "Monday", "time": "Dinner"},
      {"truck": "Tea Station", "location": "Boston Public Library", "day": "Saturday", "time": "Lunch"},
      {"truck": "Tea Station", "location": "Boston Public Library", "day": "Saturday", "time": "Dinner"},
      {"truck": "Tenoch Mexican", "location": "Back Bay - Prudential, in front of Christian Science Center's Children's Fountain", "day": "Friday", "time": "Lunch"},
      {"truck": "Tenoch Mexican", "location": "Greenway, Rowes Wharf Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "Tenoch Mexican", "location": "Greenway, Dewey Square Park Plaza", "day": "Thursday", "time": "Lunch"},
      {"truck": "Tenoch Mexican", "location": "Boston University - East, on Commonwealth Ave at Silber Way", "day": "Thursday", "time": "Lunch"},
      {"truck": "Tenoch Mexican", "location": "Greenway, Dewey Square Park Plaza", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Tenoch Mexican", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Tenoch Mexican", "location": "Greenway, Rowes Wharf Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Teri-Yummy", "location": "NEU, on Opera Place at Huntington Ave", "day": "Friday", "time": "Dinner"},
      {"truck": "Teri-Yummy", "location": "Boston University - East, on Commonwealth Ave at Silber Way", "day": "Monday", "time": "Dinner"},
      {"truck": "Teri-Yummy", "location": "NEU, on Opera Place at Huntington Ave", "day": "Sunday", "time": "Lunch"},
      {"truck": "Teri-Yummy", "location": "NEU, on Opera Place at Huntington Ave", "day": "Sunday", "time": "Dinner"},
      {"truck": "Teri-Yummy", "location": "Dudley Square at Dudley street", "day": "Thursday", "time": "Lunch"},
      {"truck": "Teri-Yummy", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Teri-Yummy", "location": "NEU, on Opera Place at Huntington Ave", "day": "Tuesday", "time": "Dinner"},
      {"truck": "Teri-Yummy", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Tuesday", "time": "Dinner"},
      {"truck": "Teri-Yummy", "location": "Financial District, Milk and Kilby Streets", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Teri-Yummy", "location": "Chinatown, Boylston St near Washington St", "day": "Wednesday", "time": "Dinner"},
      {"truck": "Teri-Yummy 2", "location": "Clarendon St at Trinity Church", "day": "Wednesday", "time": "Dinner"},
      {"truck": "The Bacon Truck", "location": "Innovation District, Seaport Blvd at Boston Wharf Rd", "day": "Tuesday", "time": "Lunch"},
      {"truck": "The Bacon Truck", "location": "Greenway, Dewey Square Park Plaza", "day": "Wednesday", "time": "Lunch"},
      {"truck": "The Dining Car", "location": "Boston University - East, on Commonwealth Ave at Silber Way", "day": "Friday", "time": "Lunch"},
      {"truck": "The Dining Car", "location": "Greenway, Dewey Square Park Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "The Dining Car", "location": "Clarendon St at Trinity Church", "day": "Monday", "time": "Dinner"},
      {"truck": "The Dining Car", "location": "Greenway, Dewey Square Park at Congress St", "day": "Thursday", "time": "Lunch"},
      {"truck": "The Dining Car", "location": "Boston University - East, on Commonwealth Ave at Silber Way", "day": "Wednesday", "time": "Lunch"},
      {"truck": "The Roving Lunchbox", "location": "Greenway, Rowes Wharf Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "The Roving Lunchbox", "location": "Greenway, Rings Fountain at Milk St", "day": "Thursday", "time": "Lunch"},
      {"truck": "The Roving Lunchbox", "location": "Greenway, Dewey Square Park at Congress St", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Trolley Dogs", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Thursday", "time": "Lunch"},
      {"truck": "Trolley Dogs", "location": "West End, Blossom St at Emerson Place, behind MGH", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Walloon's", "location": "Greenway, Chinatown Park", "day": "Friday", "time": "Lunch"},
      {"truck": "Walloon's", "location": "Hurley Building, New Chardon and Cambridge St", "day": "Monday", "time": "Lunch"},
      {"truck": "Walloon's", "location": "Greenway, Rings Fountain at Milk St", "day": "Monday", "time": "Lunch"},
      {"truck": "Walloon's", "location": "Greenway, Chinatown Park", "day": "Thursday", "time": "Lunch"},
      {"truck": "Walloon's", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Thursday", "time": "Dinner"},
      {"truck": "Walloon's", "location": "South End - Harrison Ave and East Concord St, by BMC", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Walloon's", "location": "Greenway - Carousel", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Walloon's", "location": "Financial District, Milk and Kilby Streets", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Yumm Bai", "location": "Financial District, Milk and Kilby Streets", "day": "Monday", "time": "Lunch"},
      {"truck": "Yumm Bai", "location": "Downtown - City Hall Plaza, Fisher Park", "day": "Thursday", "time": "Lunch"},
      {"truck": "Zinneken's Waffles", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Friday", "time": "Lunch"},
      {"truck": "Zinneken's Waffles", "location": "Boston University - East, on Commonwealth Ave at Silber Way", "day": "Friday", "time": "Dinner"},
      {"truck": "Zinneken's Waffles", "location": "Greenway, Rowes Wharf Plaza", "day": "Thursday", "time": "Lunch"},
      {"truck": "Zinneken's Waffles", "location": "Boston University - East, on Commonwealth Ave at Silber Way", "day": "Thursday", "time": "Dinner"},
      {"truck": "Zinneken's Waffles", "location": "Greenway, Chinatown Park", "day": "Wednesday", "time": "Lunch"},
      {"truck": "Zinneken's Waffles", "location": "NEU, on Opera Place at Huntington Ave", "day": "Wednesday", "time": "Dinner"},
      {"truck": "Zo on the Go", "location": "Back Bay - Stuart St. at Trinity Place", "day": "Friday", "time": "Lunch"},
      {"truck": "Zo on the Go", "location": "Greenway, Dewey Square Park Plaza", "day": "Monday", "time": "Lunch"},
      {"truck": "Zo on the Go", "location": "Greenway, Rowes Wharf Plaza", "day": "Thursday", "time": "Lunch"},
      {"truck": "Zo on the Go", "location": "West End, Blossom St at Emerson Place, behind MGH", "day": "Tuesday", "time": "Lunch"},
      {"truck": "Zo on the Go", "location": "Greenway, Dewey Square Park Plaza", "day": "Wednesday", "time": "Lunch"}];
    this.state = {
      filteredDataList: this.rows,
      sortBy: "truck",
      sortDir: null
    };
  }

  getAppointments() {
    fetch('/api/v1/appointments.json')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}, (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let appointments = body;
      this.setState({ rows: appointments });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  _renderHeader(label, cellDataKey) {
    return <div>
          <a onClick={this._sortRowsBy.bind(this, cellDataKey)}>{label}</a>
           <div>
              <input style={{width:90+'%'}} onChange={this._onFilterChange.bind(this, cellDataKey)}/>
            </div>
        </div>;
  }

  _onFilterChange(cellDataKey, event) {
    if (!event.target.value) {
      this.setState({
        filteredDataList: this.rows,
      });
    }
    let filterBy = event.target.value.toString().toLowerCase();
    let size = this.rows.length;
    let filteredList = [];
    for (let index = 0; index < size; index++) {
      let v = this.rows[index][cellDataKey];
      if (v.toString().toLowerCase().indexOf(filterBy) !== -1) {
        filteredList.push(this.rows[index]);
      }
    }
    this.setState({
      filteredDataList: filteredList,
    });
  }

  _sortRowsBy(cellDataKey) {
    let sortDir = this.state.sortDir;
    let sortBy = cellDataKey;
    if (sortBy == this.state.sortBy) {
      sortDir = this.state.sortDir == 'ASC' ? 'DESC' : 'ASC';
    } else {
      sortDir = 'DESC';
    }
    let rows = this.state.filteredDataList.slice();
    rows.sort((a, b) => {
      let sortVal = 0;
      if (a[sortBy] > b[sortBy]) {
        sortVal = 1;
      }
      if (a[sortBy] < b[sortBy]) {
        sortVal = -1;
      }

      if (sortDir == 'DESC') {
        sortVal = sortVal * -1;
      }
      return sortVal;
    });

    this.setState({sortBy, sortDir, filteredDataList : rows});
  }

  render() {
    let sortDirArrow = '';
    if (this.state.sortDir !== null){
      sortDirArrow = this.state.sortDir == 'DESC' ? ' ↓' : ' ↑';
    }
    return <Table
        height={360}
        width={860}
        rowsCount={this.state.filteredDataList.length}
        rowHeight={30}
        headerHeight={60}
        rowGetter={function(rowIndex) {return this.state.filteredDataList[rowIndex]; }.bind(this)}>
        <Column dataKey="truck" width={240}
          label={'Truck' + (this.state.sortBy == 'truck' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
        <Column  dataKey="location" width={380}
          label={'Location' + (this.state.sortBy == 'location' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
        <Column  dataKey="day" width={120}
          label={'Day' + (this.state.sortBy == 'day' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
        <Column  dataKey="time" width={120}
          label={'Time' + (this.state.sortBy == 'time' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
      </Table>;
  }
}

export default TruckApp;
