# =============================================================================
# Import Libraries
# =============================================================================
import requests
import urllib.request
import bs4 as bs

# =============================================================================
# Scraping Data
# =============================================================================
link= "https://www.bullion-rates.com/gold/INR/2007-1-history.htm"
requests.get(link)

url= urllib.request.urlopen(link)
soup= bs.BeautifulSoup(url, "lxml")

table= soup.find("table", class_="Grid History")
print(table)

table_rows= table.find_all("tr")
print(table_rows)

gold_rates=[]
for tr in table_rows:
    td= tr.find_all("td")
    row= [i.text for i in td]
    gold_rates.append(row)
print("----------------------------------------")
print(gold_rates)