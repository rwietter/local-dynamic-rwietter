#!/usr/bin/python2
# -*- coding: utf-8 -*-
"""
moonphase.py - Calculate Lunar Phase
Author: Sean B. Palmer, inamidst.com
Cf. http://en.wikipedia.org/wiki/Lunar_phase#Lunar_phase_calculation
"""

import math, decimal, datetime, sys

dec = decimal.Decimal
params = len(sys.argv)

def position(now=None):
   if now is None:
      now = datetime.datetime.now()

   diff = now - datetime.datetime(2001, 1, 1)
   days = dec(diff.days) + (dec(diff.seconds) / dec(86400))
   lunations = dec("0.20439731") + (days * dec("0.03386319269"))

   return lunations % dec(1)

def phase(pos):
   index = (pos * dec(8)) + dec("0.5")
   index = math.floor(index)
   return {
      0: "🌕",
      1: "🌔",
      2: "🌔",
      3: "🌒",
      4: "🌑",
      5: "🌒",
      6: "🌒",
      7: "🌔"
   }[int(index) & 7]

def phasen(pos):
   index = (pos * dec(8)) + dec("0.5")
   index = math.floor(index)
   return {
      0: "New Moon", 
      1: "Waxing Crescent", 
      2: "First Quarter", 
      3: "Waxing Gibbous", 
      4: "Full Moon", 
      5: "Waning Gibbous", 
      6: "Last Quarter", 
      7: "Waning Crescent"
   }[int(index) & 7]

def main():
   pos = position()
   phasename = phase(pos)
   phas = phasen(pos)
   roundedpos = round(float(pos), 3)
   print("%s %s (%s)" % (phasename, phas, roundedpos))

if __name__=="__main__":
   main()
