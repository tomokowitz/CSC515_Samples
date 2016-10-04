function getNiceTime(time)
{
	hour = time.getHours();
	minutes = time.getMinutes();
	seconds = time.getSeconds();
	if (hour >= 13)
	{
		hour = hour - 12;
		ampm = "PM";
	}
	else
		ampm = "AM";
	if (hour == 0)
		hour = 12;
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}
	if (seconds < 10)
	{
		seconds = "0" + seconds;
	}
	return hour + ":" +  minutes + ":" + seconds + ampm;
}
