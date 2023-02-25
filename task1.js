function ConvertingLowercase(line)
{
    let otvet;
    otvet = line[0].toUpperCase();
    otvet += line.slice(1).toLowerCase();
    return otvet;
}


function ConvertingSpace(line)
{
    let otvet = line.replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, '');
    while(otvet.indexOf("  ") != -1) {
        otvet = otvet.replaceAll('  ', ' ');
    }
    return otvet;
}


function CountWords(line)
{
    return line.split(" ").length;
}

function CountUniqueWords(line )
{
    let stroka = line.replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, '').toLowerCase();

    let words = stroka.split(' ');
    let unique = {};

    words.forEach(function(i) {unique[i] = (unique[i]||0) + 1;});
    return unique;
}

