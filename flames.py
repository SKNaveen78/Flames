def flames(firstName, secondName):

  print("--------------------------------------------------------")
  print("The first name is ",firstName)
  print("The second name is ",secondName)
  print("--------------------------------------------------------")

  firstName = firstName.lower().replace(" ","")
  secondName = secondName.lower().replace(" ","")
  
  if (firstName=="" or secondName==""): return "Enter the names"

  FirstNameLetters = {}
  for i in range(len(firstName)):
    if firstName[i] not in FirstNameLetters:
      FirstNameLetters[firstName[i]]= 1
    else:
      FirstNameLetters[firstName[i]] = FirstNameLetters[firstName[i]] + 1
  print("Letters and its count in First Name")
  print(FirstNameLetters)
  print("--------------------------------------------------------")

  SecondNameLetters = {}
  for i in range(len(secondName)):
    if secondName[i] not in SecondNameLetters:
      SecondNameLetters[secondName[i]]= 1
    else:
      SecondNameLetters[secondName[i]] = SecondNameLetters[secondName[i]] + 1
  print("Letters and its count in First Name")
  print(SecondNameLetters)
  print("--------------------------------------------------------")

  count = 0
  for key, value in SecondNameLetters.items():
    if key in FirstNameLetters:
      count += min(FirstNameLetters[key], value)
  common = count*2
  step = len(firstName)+len(secondName) - common
  print("The count of common letters in the names: ",count)
  #print(common)
  print("--------------------------------------------------------")

  print("The step count is: ", step)
  print("--------------------------------------------------------")

  print("Flames Iteration\n")
  flames = list(str('FLAMES'))
  place = 0
  while (len(flames)>1):
    index = (place+step) % len(flames) - 1
    if (index==-1): index = len(flames) - 1
    flames.remove(flames[index])
    print(" ".join(flames))
    place = index
  print("--------------------------------------------------------")

  flames_map = {
      'F': "FRIENDS",
      'L': "LOVERS",
      'A': "AFFECTION",
      'M': "MARRIAGE",
      'E': "ENEMIES",
      'S': "SISTER"
  }
  return flames_map[flames[0]]