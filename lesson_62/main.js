function logger(log = "giá trị mặc định", isAlert) {
    if (isAlert) {
        return alert(log);
    }
    console.log(log);
}
logger("Đây là blog của tôi");
logger()
logger(123, true);