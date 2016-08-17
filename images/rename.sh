#! /bin/bash

FILES=()
index=0

for i in *.jpg; do

	#echo "Adding$i"
	#echo $(($index + 1))
	FILES+=("$i")

	#cp $i "justin_image"
done


for j in ${FILES[@]}; do

	((index++))

	echo "renaming... $j ... to ... justin-IMAGE-$index.jpg"
	echo ""
	sleep .075s
	#echo $index

	mv "$j" "justin-IMAGE-$index.jpg"
done